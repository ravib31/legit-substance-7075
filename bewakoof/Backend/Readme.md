// ReadMe File For Backend
// URL & EndPoints


// Register Url - localhost:4500/user/register

// Register Body Contents
// Normal User Body Contents

{
  "username": "UttamKr",
  "email": "uttam@gmail.com",
  "password": "uttam",
  "age": 25,
  "location": "chirkunda",
  "type": "USER",
  "order": {
    "OrderedItems": []
  },
  "__v": 0
}


// Admin User Body Contents


{
  "username": "Admin",
  "email": "admin@gmail.com",
  "password": "admin",
  "age": 25,
  "location": "chirkunda",
  "type": "ADMIN",
}



// Login Url - localhost:4500/user/login
// Login Body Contents

{
"username": "UttamKr",
"password": "uttam"
}


// Admin Login Url - localhost:4500/user/Adminlogin
// Login Body Contents



{
"username": "Admin",
"password": "admin"
}