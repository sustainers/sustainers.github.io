/* eslint-env es6 */

/**
 * Script to Create a New Blog Post for a Jekyll Website
 *
 * This script automates the creation of a new blog post with the necessary front matter.
 * It takes a post title as an argument and generates a Markdown file with a formatted filename
 * based on the current date and the provided title.
 *
 * Usage:
 *   Run the script with Node.js, passing the post title as an argument:
 *   `npm run create-blog "Your Post Title"`
 *
 * The script will create a new file in the `_posts` directory. You can then edit this file
 * to add your blog content.
 *
 * Requirements:
 *   - Node.js must be installed on your system.
 *   - The script assumes a Jekyll blog structure with a `_posts` directory.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const createBlogPost = (title) => {
    const date = new Date().toISOString().split('T')[0];
    const formattedTitle = title.replace(/\s+/g, '-').toLowerCase();
    const filename = `${date}-${formattedTitle}.md`;
    const filePath = path.join(__dirname, '../_posts', filename);
    const content = `---
layout: post
title: "${title}"
permalink: /blog/:title/
---

`;

    fs.writeFile(filePath, content, (err) => {
        if (err) throw err;
        console.log(`Blog post created: ${filename}`);
    });
};

const title = process.argv[2];
if (!title) {
    console.error('Please provide a title for the blog post.');
    process.exit(1);
}

createBlogPost(title);
