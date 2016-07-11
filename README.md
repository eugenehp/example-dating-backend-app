# Example Dating Backend App

## Installation

```
npm install
```

## Run

Seed

```
npm run seed
```

Development

```
npm run dev
```

## API

[Screencast video](https://youtu.be/d06mSb6EeA0)

### Signup

#### CURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"email":"b@b.com","password":"something"}' https://serene-beyond-14794.herokuapp.com/signup
```

#### Example output:

```
{
  "success": true,
  "message": "Successfully created new user."
}
```

### Signin

#### CURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"email":"b@b.com","password":"something"}' https://serene-beyond-14794.herokuapp.com/signin
```

#### Example output:

```
{
  "success": true,
  "token": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1NzgzZGVjYzc4NzViMzBmMDA1ZTQzYzQiLCJfX3YiOjAsImNyZWF0ZWQiOiIyMDE2LTA3LTExVDE4OjAwOjQ0LjM0M1oiLCJyZWplY3RzIjpbXSwibGlrZXMiOltdLCJjb21maXJtZWRFbWFpbCI6ZmFsc2UsImVtYWlsIjoiYkBiLmNvbSIsImlhdCI6MTQ2ODI2MDA3MiwiZXhwIjoxNDY4MjcwMTUyfQ.WQXD4BjnFP3ce_P2_yx6eqwrzjqoMCf3O6tlf_B_GDI"
}
```

### Batch

#### CURL

```
curl -i -H "Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1NzgzZGVjYzc4NzViMzBmMDA1ZTQzYzQiLCJfX3YiOjAsImNyZWF0ZWQiOiIyMDE2LTA3LTExVDE4OjAwOjQ0LjM0M1oiLCJyZWplY3RzIjpbXSwibGlrZXMiOltdLCJjb21maXJtZWRFbWFpbCI6ZmFsc2UsImVtYWlsIjoiYkBiLmNvbSIsImlhdCI6MTQ2ODI2MDA3MiwiZXhwIjoxNDY4MjcwMTUyfQ.WQXD4BjnFP3ce_P2_yx6eqwrzjqoMCf3O6tlf_B_GDI"  "https://serene-beyond-14794.herokuapp.com/batch?limit=10&distance=10000&location=34.68058428778154,-120.82321805149428&religion=judaism&sex=male&age=18,99&height=5.5,19,9"
```

#### Params

`limit` – limits number of results

`skip` – skips first X of results

`distance` – radius of the search area in kilometers

`location` - two comma separated digits specifing latitude and longitude of the center of the searching area

`religion` – any combination of comma separated values from `judaism`, `christianity`, `islam`, `hinduism`, `taoism`, `buddhism`, `sikhism`, `agnostic`, `atheist`

`sex` – cane be `male`, `female`, `any`

`height` – fixed height like this `5.6` or a comma separated range `5.1,19.9`

#### Example output:

```
[{
  "_id": "5783dcdadb135a784a5462d2",
  "age": 45,
  "height": 15.7,
  "sex": "male",
  "religion": "judaism",
  "loc": [34.82523078438518, -121.48757934939589],
  "__v": 0,
  "created": "2016-07-11T17:52:26.737Z",
  "comfirmedEmail": false
}, {
  "_id": "5783dcdadb135a784a546295",
  "age": 72,
  "height": 18.2,
  "sex": "male",
  "religion": "judaism",
  "loc": [34.29963454568689, -119.71138112866707],
  "__v": 0,
  "created": "2016-07-11T17:52:26.688Z",
  "comfirmedEmail": false
}]
```

### Like

Puts specific user id into the likes array of the authorized user. Also removes this ID from the batch result.

#### CURL

```
curl -i -H "Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1NzgzZGVjYzc4NzViMzBmMDA1ZTQzYzQiLCJfX3YiOjAsImNyZWF0ZWQiOiIyMDE2LTA3LTExVDE4OjAwOjQ0LjM0M1oiLCJyZWplY3RzIjpbXSwibGlrZXMiOltdLCJjb21maXJtZWRFbWFpbCI6ZmFsc2UsImVtYWlsIjoiYkBiLmNvbSIsImlhdCI6MTQ2ODI2MDA3MiwiZXhwIjoxNDY4MjcwMTUyfQ.WQXD4BjnFP3ce_P2_yx6eqwrzjqoMCf3O6tlf_B_GDI"  "https://serene-beyond-14794.herokuapp.com/like?id=5783dcdadb135a784a5462d1"
```

### Reject

Puts specific user id into the rejects array of the authorized user. Also removes this ID from the batch result.

#### CURL

```
curl -i -H "Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1NzgzZGVjYzc4NzViMzBmMDA1ZTQzYzQiLCJfX3YiOjAsImNyZWF0ZWQiOiIyMDE2LTA3LTExVDE4OjAwOjQ0LjM0M1oiLCJyZWplY3RzIjpbXSwibGlrZXMiOltdLCJjb21maXJtZWRFbWFpbCI6ZmFsc2UsImVtYWlsIjoiYkBiLmNvbSIsImlhdCI6MTQ2ODI2MDA3MiwiZXhwIjoxNDY4MjcwMTUyfQ.WQXD4BjnFP3ce_P2_yx6eqwrzjqoMCf3O6tlf_B_GDI"  "https://serene-beyond-14794.herokuapp.com/reject?id=5783dcdadb135a784a5462d1"
```
