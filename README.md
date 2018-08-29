# SustainOSS.org Website

[![Linux Build Status](https://img.shields.io/travis/sustainers/website/master.svg?label=Linux%20build)](https://travis-ci.org/sustainers/website)

## Getting started

* Install Ruby and Ruby DevKit; make sure you select "Add Ruby to `PATH`"
* Run `gem install bundle` and then `bundle install`
* Run `bundle exec jekyll s` to build and watch for changes (`http://localhost:8000/`)

### npm tasks

* Install [Node.js](https://nodejs.org/en/)
* Run `npm i`
* Run `npm run autoprefixer` to update the vendor prefixes in our Sass files; should be run frequently
* Run `npm run build && npm run critical` to generate the critical CSS; usually after Bootstrap has been updated
* Run `npm run svgo assets/img/foo.svg` to optimize file(s)

## Contribute

Please contribute! Open an issue, make a pull request, reach out for help. This organization is entirely volunteer run, and your contributions are important.

We use Slack to discuss our changes and to talk about community issues, as well as GitHub. Join our community slack here: https://changelog.com/community. Join the channel #sustain to talk to us.

If you need help with using GitHub in order to open an issue, sign up for an account, come back to this page, and open an issue by [clicking here](https://github.com/sustainers/website/issues/new). Ping one of us on Slack if you need help.

## License

[MIT](LICENSE) © 2018 Justin Dorfman and [Contributors](https://github.com/sustainers/website/graphs/contributors).

If you contribute to this repository, you are agreeing to the License terms and agreeing that an MIT license is appropriate for your contributions.
