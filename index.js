#!/usr/bin/env node

'use strict'

import chalk from 'chalk'
import boxen from 'boxen'
import clear from 'clear'
import inquirer from 'inquirer'
import open from 'open'
import fs from 'fs'
import axios from 'axios'
import path from 'path'
import ora from 'ora'
import cliSpinners from 'cli-spinners'
import { getGithubProfile, getGithubRepos } from './lib/github.js'

clear()

const prompt = inquirer.createPromptModule()

const questions = [
    {
        type: 'list',
        name: 'action',
        message: 'What do you want to do?',
        choices: [
            {
                name: `Send me an ${chalk.green.bold('Email')}?`,
                value: () => {
                    open('mailto:samanuaia257@gmail.com');
                    console.log('\nDone, see you soon at inbox.\n');
                }
            },
            {
                name: `Download my ${chalk.magenta.bold('Resume')}?`,
                value: () => {
                    const spinner = ora({
                        text: 'Downloading resume...',
                        spinner: cliSpinners.dots
                    }).start();

                    const downloadUrl = 'https://night-slayer.netlify.app/';
                    const downloadPath = path.join(process.cwd(), 'samanuai_resume.html');
                    const writer = fs.createWriteStream(downloadPath);

                    axios({
                        url: downloadUrl,
                        method: 'GET',
                        responseType: 'stream'
                    })
                    .then(response => {
                        response.data.pipe(writer);
                        writer.on('finish', () => {
                            console.log('\nResume downloaded successfully!\n');
                            open(downloadPath);
                            spinner.stop();
                        });
                        writer.on('error', err => {
                            console.error('\nError downloading the resume:', err);
                            spinner.stop();
                        });
                    })
                    .catch(error => {
                        console.error('\nError making request to download the resume:', error);
                        spinner.stop();
                    });
                }
            },
            {
                name: `View my ${chalk.blue.bold('GitHub')} profile?`,
                value: () => {
                    getGithubProfile('night-slayer18');
                }
            },
            {
                name: `View my ${chalk.cyan.bold('Top 5 Github')} Repositories?`,
                value: () => {
                    getGithubRepos('night-slayer18');
                }
            },
            {
                name: 'Just quit.',
                value: () => {
                    console.log('Good bye!\n');
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                           Samanuai A"),
    handle: chalk.white("@night-slayer18"),
    student: `${chalk.white("Computer Science Engineering at")} ${chalk
        .hex("#2b82b2")
        .bold("FISAT, Angamaly")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("NiGhTsL93934079"),
    github: chalk.gray("https://github.com/") + chalk.green("night-slayer18"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("samanuai"),
    instagram: chalk.gray("https://instagram.com/") + chalk.magenta("_n_i_g_h_t__s_l_a_y_e_r_"),
    hackerRank: chalk.gray("https://hackerrank.com/profile/") + chalk.red("S4M4NU4i"),
    email: chalk.white("samanuaia257@gmail.com"),
    web: chalk.cyan("https://nightslayer.me"),
    npx: chalk.red("npx") + " " + chalk.white("night-slayer18"),

    labelWork: chalk.white.bold("    Student:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelInstagram: chalk.white.bold("  Instagram:"),
    labelHackerRank: chalk.white.bold(" HackerRank:"),
    labelEmail: chalk.white.bold("      Email:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.student}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelInstagram}  ${data.instagram}`,
        `${data.labelHackerRank}  ${data.hackerRank}`,
        ``,
        `${data.labelEmail}  ${data.email}`,
        ``,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I am currently looking for new opportunities,"
        )}`,
        `${chalk.italic("my inbox is always open. Whether you have a")}`,
        `${chalk.italic(
            "question or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "my best to get back to you!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 2,
        borderStyle: "round",
        borderColor: "blue",
    }
);

console.log(me);

const tip = [
    `Tip: ${chalk.cyanBright(
        "cmd/ctrl + click"
    )} on the links to open them in your browser.`,
    '',
].join("\n");

console.log(tip);

prompt(questions).then(answer => answer.action())