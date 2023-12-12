# SustainOSS.org Website

[![Build Status](https://github.com/sustainers/website/workflows/Tests/badge.svg)](https://github.com/sustainers/website/actions?workflow=Tests)

## Getting started

The easiest way to contribute to this project is via [GitPod](https://gitpod.io). GitPod will set up your developer environment in the browser with your GitHub credentials.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/sustainers/website)

Alternatively, you can run the application locally:

* Install Ruby (preferably version **2.7.x**) make sure you select "Add Ruby to `PATH`"
* Run `bundle install`
* Run `bundle exec jekyll s` to build and watch for changes (`http://localhost:8000/`)

### npm tasks

* Install [Node.js](https://nodejs.org/en/), preferably version **16 LTS**
* Run `npm i`
* Run `npm run autoprefixer` to update the vendor prefixes in our Sass files; should be run frequently
* Run `npm run svgo:base -- assets/img/foo.svg` to optimize specific file(s) or `npm run svgo`
* Run `npm run` to see the available npm scripts

## Contribute

Please contribute! Open an issue, make a pull request, reach out for help. This organization is entirely volunteer run, and your contributions are important.

We use Slack to discuss our changes and to talk about community issues, as well as GitHub. Join our community slack [here](https://changelog.com/community). Join the channel `#sustain` to talk to us.

If you need help with using GitHub in order to open an issue, sign up for an account, come back to this page, and open an issue by [clicking here](https://github.com/sustainers/website/issues/new). Ping one of us on Slack if you need help.

### Blog posts

We have a convenient script set up to help you create new blog posts for our Jekyll site. This script will automatically generate a new post file with the necessary front matter based on the title you provide.

#### Steps to Create a New Post:

1. Ensure Node.js is Installed: This script requires Node.js. If you don't have Node.js installed, please download and install it from [Node.js official website.](https://nodejs.org/)

2. Run the Script: Use the following command to create a new post:

    ```bash
    npm run create-blog "Your Post Title"
    ```

    Replace "Your Post Title" with the actual title of your blog post.

3. Edit Your Post: The script will create a new Markdown file in the _posts directory. The file name is generated based on the current date and the title you provide. Open this file in your favorite text editor to add content to your blog post.

4. Follow Jekyll Conventions: Ensure that you follow the standard Jekyll conventions for blog posts. This includes using Markdown for formatting and placing any images or additional resources in the appropriate directories.

5. Run `npm run lint` before committing to your PR.

## License

[MIT](LICENSE) © 2018 Justin Dorfman and [Contributors](https://github.com/sustainers/website/graphs/contributors).

If you contribute to this repository, you are agreeing to the License terms and agreeing that an MIT license is appropriate for your contributions.
