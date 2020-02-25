![GitHub top language](https://img.shields.io/github/languages/top/rmorabia/radhikaisms.svg?style=for-the-badge) ![GitHub repo size](https://img.shields.io/github/repo-size/rmorabia/radhikaisms.svg?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/rmorabia/radhikaisms.svg?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/rmorabia/radhikaisms.svg?style=for-the-badge)

# [radhikaisms](https://www.radhikaisms.herokuapp.com/)

Generate out-of-context Radhika quotes for fun and amusement!

You can submit a new quote by going to [the app](https://radhikaisms.herokuapp.com). You can also submit a POST request directly.

## Usage

In order to access this API, please go to the following endpoints:

### GET a random quote: `/getQuote`

```sh
curl --location --request GET 'radhikaisms.herokuapp.com/getQuote'
```

This will return a random quote as the body.

### POST a new quote: `/postQuote`

```sh
curl --location --request GET 'radhikaisms.herokuapp.com/postQuote' \
--data-raw 'random quote here'
```

You need to add the random quote as a body. This accepts `text/plain` content only.

## Installation

First, clone the repository locally using:

```sh
git clone https://github.com/rmorabia/radhikaisms.git
```

Then, navigate to the repository using:

```sh
cd radhikaisms
```

Install the necessary Node modules using:

```sh
npm i
```

You can run the server using:

```sh
npm start
```

## Contributing

Issues are welcome! Suggest a new feature, report a bug, or just yell at me. I'm open to it all.

Pull Requests are also welcome.

Please note, in order to contribute to this codebase, you must follow the code of conduct. This follows the Contributor Covenant standard and can be viewed [here](https://github.com/rmorabia/radhikaisms/blob/master/CODE_OF_CONDUCT.md).

## License

[MIT](https://choosealicense.com/licenses/mit/)
