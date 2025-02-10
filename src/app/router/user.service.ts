import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users=[
  {
    "id": 1,
    "name": "John Doe",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "img": "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
    "address": {
      "street": "123 Main St",
      "suite": "Apt. 4B",
      "city": "New York",
      "zipcode": "10001",
      "geo": {
        "lat": "40.7128",
        "lng": "-74.0060"
      }
    }
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "username": "janesmith",
    "email": "janesmith@example.com",
    "img": "https://example.com/images/janesmith.jpg",
    "address": {
      "street": "456 Elm St",
      "suite": "Suite 300",
      "city": "Los Angeles",
      "zipcode": "90001",
      "geo": {
        "lat": "34.0522",
        "lng": "-118.2437"
      }
    }
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "username": "alicej",
    "email": "alicej@example.com",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzxtEVseLXic3AosLOSFkK_nKqCrVfUF6GA&s",
    "address": {
      "street": "789 Maple Ave",
      "suite": "Unit 12",
      "city": "Chicago",
      "zipcode": "60601",
      "geo": {
        "lat": "41.8781",
        "lng": "-87.6298"
      }
    }
  },
  {
    "id": 4,
    "name": "Robert Brown",
    "username": "robbrown",
    "email": "robbrown@example.com",
    "img": "https://example.com/images/robbrown.jpg",
    "address": {
      "street": "321 Oak St",
      "suite": "Apt. 2A",
      "city": "Houston",
      "zipcode": "77002",
      "geo": {
        "lat": "29.7604",
        "lng": "-95.3698"
      }
    }
  },
  {
    "id": 5,
    "name": "Emily Davis",
    "username": "emilyd",
    "email": "emilyd@example.com",
    "img": "https://example.com/images/emilyd.jpg",
    "address": {
      "street": "654 Pine St",
      "suite": "Suite 150",
      "city": "Phoenix",
      "zipcode": "85001",
      "geo": {
        "lat": "33.4484",
        "lng": "-112.0740"
      }
    }
  },
  {
    "id": 6,
    "name": "Michael Wilson",
    "username": "michaelw",
    "email": "michaelw@example.com",
    "img": "https://example.com/images/michaelw.jpg",
    "address": {
      "street": "987 Cedar Blvd",
      "suite": "Unit 8C",
      "city": "Philadelphia",
      "zipcode": "19103",
      "geo": {
        "lat": "39.9526",
        "lng": "-75.1652"
      }
    }
  },
  {
    "id": 7,
    "name": "Sophia Martinez",
    "username": "sophiam",
    "email": "sophiam@example.com",
    "img": "https://example.com/images/sophiam.jpg",
    "address": {
      "street": "135 Spruce St",
      "suite": "Apt. 5D",
      "city": "San Antonio",
      "zipcode": "78205",
      "geo": {
        "lat": "29.4241",
        "lng": "-98.4936"
      }
    }
  },
  {
    "id": 8,
    "name": "David Taylor",
    "username": "davidt",
    "email": "davidt@example.com",
    "img": "https://example.com/images/davidt.jpg",
    "address": {
      "street": "246 Willow Lane",
      "suite": "Suite 400",
      "city": "San Diego",
      "zipcode": "92101",
      "geo": {
        "lat": "32.7157",
        "lng": "-117.1611"
      }
    }
  },
  {
    "id": 9,
    "name": "Isabella Garcia",
    "username": "isabellag",
    "email": "isabellag@example.com",
    "img": "https://example.com/images/isabellag.jpg",
    "address": {
      "street": "369 Cypress Ct",
      "suite": "Unit 1A",
      "city": "Dallas",
      "zipcode": "75201",
      "geo": {
        "lat": "32.7767",
        "lng": "-96.7970"
      }
    }
  },
  {
    "id": 10,
    "name": "Daniel Anderson",
    "username": "daniela",
    "email": "daniela@example.com",
    "img": "https://example.com/images/daniela.jpg",
    "address": {
      "street": "789 Birch Rd",
      "suite": "Apt. 3F",
      "city": "San Jose",
      "zipcode": "95112",
      "geo": {
        "lat": "37.3382",
        "lng": "-121.8863"
      }
    }
  }
]
getUserById(id: number): any {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      console.error(`User with ID ${id} not found.`);
      return null;
    }
    return user;
  }
}
