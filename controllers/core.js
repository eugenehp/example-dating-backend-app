"use-strict";

import Promise  from 'bluebird';
import mongoose from 'mongoose';
import User     from '../models/user';
import config   from '../config';


function batch(req, res) {
  let object        = {};
  let limit         = parseInt(req.query.limit) || 10;
  let skip          = parseInt(req.query.skip) || 0;
  let maxDistance   = parseInt(req.query.distance) || 10;

  // we need to convert the distance to radians
  // the raduis of Earth is approximately 6371 kilometers
  maxDistance /= 6371;

  let loc       = req.query.location;
  let age       = req.query.age;
  let height    = req.query.height;
  let sex       = req.query.sex;
  let religion  = req.query.religion;

  if(loc){
    loc = loc.replace('[','').replace(']','').split(',');
    let coords = [];
    if(loc.length == 2){
      coords[0] = Number( loc[0] );
      coords[1] = Number( loc[1] );

      object.loc = {
        $near:        coords,
        $maxDistance: maxDistance
      };
    }
  }

  if(age){
    age = age.split(',');
    if( age.length > 1 )
      object.age = { $gte: parseInt( age[0] ), $lte: parseInt( age[1] ) };
    else
      object.age = parseInt(age);
  }

  if(height){
    height = height.split(',');
    if( height.length > 1 )
      object.height = { $gte: parseFloat( height[0] ), $lte: parseFloat( height[1] ) };
    else
      object.height = parseFloat(height);
  }

  if(sex){
    sex = sex.split(',');
    sex = sex.map( el => el.trim() );
    if( sex.length > 1 )
      object.sex = { $in: sex };
    else if(sex != 'any')
      object.sex = sex;
  }

  if(religion){
    religion = religion.split(',');
    religion = religion.map( el => el.trim() );
    if( religion.length > 1 )
      object.religion = { $in: religion };
    else if(religion != 'any')
      object.religion = religion;
  }

  //remove himself, previous rejects and previous likes
  let ids = Array.concat(req.user._id,req.user.likes,req.user.rejects);

  object._id = { $nin: ids };

  console.log(object);

  User.find(object)
  .select('-password -email -rejects -likes')
  .limit(limit)
  .skip(skip)
  .exec(function(err, users) {
    if (err) {
      return res.json(500, err);
    }

    res.json(200, users);
  });
}

function like(req, res) {
  let id = req.query.id;
  if(id){
    if( req.user.likes.indexOf( id ) == -1)
      req.user.likes.push(id)
    if( req.user.rejects.indexOf( id ) != -1)
      req.user.rejects.splice( req.user.rejects.indexOf( id ), 1 );
  }

  req.user.save( (err) => res.jsonp({data:req.user}) );
  
}

function reject(req, res) {
  let id = req.query.id;
  if(id){
    if( req.user.rejects.indexOf( id ) == -1)
      req.user.rejects.push(id)
    if( req.user.likes.indexOf( id ) != -1)
      req.user.likes.splice( req.user.likes.indexOf( id ), 1 );
  }

  req.user.save( (err) => res.jsonp({data:req.user}) );
}


export default {
  batch,
  like,
  reject
}