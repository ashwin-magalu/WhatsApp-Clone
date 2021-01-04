export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Ashwin',
		imageUri: 'https://scontent.fblr4-1.fna.fbcdn.net/v/t1.0-1/p160x160/17799417_1154196798022902_1306564723060815591_n.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=vHDxbHOuO1YAX9gePkE&_nc_ht=scontent.fblr4-1.fna&tp=6&oh=4ec90d16a37e91a31b2db235fff955e9&oe=60182AA4',
	}, {
		id: 'u2',
		name: 'Akshay',
		imageUri: 'https://scontent.fblr4-1.fna.fbcdn.net/v/t1.0-1/s200x200/95359417_2764651813646328_4958779965047832576_n.jpg?_nc_cat=109&ccb=2&_nc_sid=7206a8&_nc_ohc=d9TAO-bnFJoAX95wv4X&_nc_ht=scontent.fblr4-1.fna&tp=7&oh=7785f7ffd76f979363ef1904e7013bc0&oe=601903E4',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Akshay!',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Ashwin',
		},
	}, {
		id: 'm2',
		content: 'I am good',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Akshay',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Akshay',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the stream now.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Ashwin',
		},
	}, {
		id: 'm5',
		content: 'How is your uni going?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Ashwin',
		},
	}, {
		id: 'm6',
		content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Akshay',
		},
	}, {
		id: 'm7',
		content: 'Big Data is really interesting. Cannot wait to go through all the material.',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Ashwin',
		},
	}]
}