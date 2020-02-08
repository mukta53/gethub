
users: [
    {"email": "e1@address.com", "password": "1234"},
    {"email": "e2@address.com", "password": "1234"},
    ]
    lessons: [
    { 'topic': 'math', 'location': 'hendon', 'price': 100 },
    { 'topic': 'math', 'location': 'colindale', 'price': 80 },
    ]

    var userform = new Vue({
        el: "#userform",
        data: {
        currentUser: '',
        email: '',
        password: '',
        userMessage: ''
        },
        methods: {
        signup: function() {...}
        signin: function() {...}
        signout: function() {...}
        }
    })

        signup: function() {
            this.userMessage = '';
            // more validation should be included
            if (!this.email) {
            this.userMessage = 'error: empty email';
            return
            }
            if (!this.password) {
            this.userMessage = 'error: empty password';
            return;
            }
            var newUser = {
            'email': this.email,
            'password': this.password
            }
            // a user array should be used
            localStorage.setItem('users', JSON.stringify(newUser))
            },

            var users = '';
var newEmail = this.email;
if (localStorage.getItem('users')) { // 'users' is an array of objects
users = JSON.parse(localStorage.getItem('users'));
};
if (users) {
if (users.some(function (user) { return user.email === newEmail })) {
alert('Email already exists!');
return;
}
users.push({ 'email': newEmail, 'password': this.password });
localStorage.setItem('users', JSON.stringify(users));
}
else {
users = [{ 'email': newEmail, 'password': this.password }];
localStorage.setItem('users', JSON.stringify(users));
}

<input type="radio" id="option1" value="student" v-model="userType">
<label for="option1">Provider</label>
<input type="radio" id="option2" value="provider" v-model="userType">
<label for="option2">Provider</label>

users: [
{"email": "e1@address.com", "password": "1234", "type":"student"},
{"email": "e2@address.com", "password": "1234", "type":"provider"},
]

signin: function () {
var savedUser = JSON.parse(localStorage.getItem('users'));
if (savedUser.email == this.email && savedUser.password == this.password) {
this.currentUser = this.email;
}
else {
this.userMessage = ' error: username or password is not correct.';
return;
}
},
signout: function () {
this.currentUser = '';
this.email = '';
this.password = '';
}

var courses = [
{ 'topic': 'math', 'location': 'hendon', 'price': 100 },
{ 'topic': 'math', 'location': 'colindale', 'price': 80 },
{ 'topic': 'math', 'location': 'brent cross', 'price': 90 },
{ 'topic': 'math', 'location': 'golders green', 'price': 120 },
{ 'topic': 'english', 'location': 'hendon', 'price': 110 },
{ 'topic': 'english', 'location': 'colindale', 'price': 90 },
{ 'topic': 'english', 'location': 'brent cross', 'price': 90 },
{ 'topic': 'english', 'location': 'golders green', 'price': 130 },
{ 'topic': 'piano', 'location': 'hendon', 'price': 120 },
{ 'topic': 'piano', 'location': 'golders green', 'price': 140 }
]

var searchApp = new Vue({
el: '#search',
data: {
'term': ''
},
computed: {
results : function () {
return courses.filter(course =>
course.topic.includes(term)
)
}
}});

var filterApp = new Vue({
el: '#filter',
data: {
userLocations: []
},
methods: {
reset: function () {
this.userLocations = [];
}
},
computed: {
locations: function () {
// return an array of all the locations
return [...new Set(courses.map(x => x.location))]
},
results: function () {
return courses.filter(course =>
this.userLocations.length == 0 ||
this.userLocations.includes(course.location)
)
}
}
})

var searchApp = new Vue({
el: '#searchFilter',
data: {
term: '',
userLocations: []
},
methods: {
reset: function () {
this.userLocations = [];
}
},
computed: {
locations: function () {

return [...new Set(this.results.map(x => x.location))]
},
results: function () {
return courses.filter(course => {

var searchCourse = course.topic.includes(this.term);

var filterCourse = this.userLocations.length == 0 ||
this.userLocations.includes(course.location);

return searchCourse && filterCourse;
})
},
},
});

lessons: [
{ 'topic': 'math', 'location': 'hendon', 'price': 100, 'ranking': [
{'user': 'email1', 'ranking': 5},
{'user': 'email2', 'ranking': 3},
]},
]
lessons: [
{ 'topic': 'math', 'location': 'hendon', 'price': 100, 'ranking': [...], 'provider': 'email'},
]

const http = require('http') const port = 3000 http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    }) res.end('Hello World\n')
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})