#!/usr/bin/env node

'use strict'

import chalk from 'chalk'
import boxen from 'boxen'
import clear from 'clear'

clear()

const data = {
    name: chalk.bold.green("             Samanuai A"),
    handle: chalk.white("@night-slayer18"),
    Student: `${chalk.white("Computer Science Engineering at")} ${chalk
        .hex("#2b82b2")
        .bold("FISAT, Angamaly")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("NiGhTsL93934079"),
    github: chalk.gray("https://github.com/") + chalk.green("night-slayer18"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("samanuai"),
    instagram: chalk.gray("https://instagram.com/") + chalk.magenta("_n_i_g_h_t__s_l_a_y_e_r_"),
    hackerRank: chalk.gray("https://hackerrank.com/profile/") + chalk.red("S4M4NU4i"),
    web: chalk.cyan("https://nightslayer.me"),
    npx: chalk.red("npx") + " " + chalk.white("night-slayer"),

    labelWork: chalk.white.bold("       Student:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelInstagram: chalk.white.bold("  Instagram:"),
    labelHackerRank: chalk.white.bold(" HackerRank:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelInstagram}  ${data.instagram}`,
        `${data.labelHackerRank}  ${data.hackerRank}`,
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
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);