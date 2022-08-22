const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 53,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];


class User{
    constructor(obj){

		Object.assign(this, obj);
	
    }

    render(){
		let userInfo = [];
		userInfo.push(`<div class="user">
			<div class="user__info">
				<div class="user__info--data">
				<img src="images/users/${this.img}.png" alt="Jack Smith" height="50">
				<div class="user__naming"><p>Name: <b>${this.name}</b></p>
					<p>Age: <b>${this.age}</b></p></div></div>
			<div class="user__info--role student">
				<img src="images/roles/${this.role}.png" height="25">
				<p>${this.role}</p></div></div>
				<div class="user__courses">${this.renderCourses()}</div>
			</div>
		`)
		return userInfo	
	}

    renderCourses(){
		let userCourses = [];

		if(this.courses)this.courses.map(item => userCourses
			.push(`<p class="user__courses--course student">${item.title} 
			${this.userMarks(item.mark)}</p>`));
		return userCourses.join('');

	}

	userMarks (item) {
		let mark;
		if(item <= 20) {
			mark = `<span class="satisfactory">${gradation["20"]}</span>`;
		} else if(item > 20 && item <= 55) {
			mark = `<span class="good">${gradation["55"]}</span>`;
		} else if(item > 55 && item <= 85) {
			mark = `<span class="very-good">${gradation["85"]}</span>`;
		} else if (item > 85 && item <= 100) {
			mark = `<span class="excellent">${gradation["100"]}</span>`;
		}
	
		return mark;
	}
}

class Student extends User{
    constructor(user){
        super(user);
    }
}

class Lector extends User{
    constructor(user){
        super(user);
    }

	renderCourses(){

		let userCourses = [];

		if(this.courses)this.courses.map(item => userCourses
			.push(`	
				<div class="user__courses--course lector">
					<p>Title: <b>${item.title}</b></p>
					<p>Lector's score:${this.userMarks(item.studentsScore)}</p>
					<p>Average student's score: ${this.userMarks(item.studentsScore)}</p>
				</div>`));
		
			return `<div class="user__courses admin--info">${userCourses}</div>`;
	}
}

class Admin extends User{
    constructor(user){
        super(user);
    }

	renderCourses(){

		let userCourses = [];

		if(this.courses)this.courses.map(item => userCourses
			.push(`	
				<div class="user__courses--course admin">
					<p>Title: <b>${item.title}</b></p>
					<p>Admin's score:${this.userMarks(item.score)} </p>
					<p>Lector: <b>${item.lector}</b></p>
				</div>`));
		
			return `<div class="user__courses admin--info">${userCourses}</div>`;
	}
}

const USER_ROLE = {
	student: user => new Student(user),
	lector: user => new Lector(user),
	admin: user => new Admin(user)
}

let newUsers = users
	.map(user => {
		return USER_ROLE[user.role] ? USER_ROLE[user.role](user) : new User(user).render()})
	.map(user => user.render())
	.join('');


document.write(`<div class="users">${newUsers}</div>`);

