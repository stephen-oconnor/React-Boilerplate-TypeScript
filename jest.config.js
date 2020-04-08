module.exports = {
	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'identity-obj-proxy',
		'^.+\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/src/test/__mocks__/fileMock.js',
	},
};
