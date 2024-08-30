#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';

const asciiArt = figlet.textSync('Lakshya Jain', { horizontalLayout: 'full' });
const coloredAsciiArt = chalk.bgBlue.white(asciiArt);

const boxWidth = 118;

const createLine = (text, textColor = chalk.bgBlack.white, paddingChar = ' ') => {
    const textLength = text.replace(/\u001b\[.*?m/g, '').length; 
    const padding = paddingChar.repeat(boxWidth - textLength - 3);
    return `| ${textColor(text)}${padding}|`;
};

const intro = `
${chalk.bgBlack.white(`
+${'-'.repeat(boxWidth - 2)}+
|                          /|                                                                                          | 
|                         / ||                                                                                         |
|                        |  ||                                                                                         |
|                        |  ||${'                               Hey, Myself Lakshya Jain...👋                             '.padEnd(boxWidth - 12)}|
|                        |  ||                                                                                         |
|                        |  ||${'                               I am a Web Developer🎇, CPer, UI/UX Designer, and        '.padEnd(boxWidth - 12)}|
|                        |  ||${'                               more including machine learning, data science, blockchain '.padEnd(boxWidth - 12)}|
|                        |  ||${'                               in Web3, integrating AI tools to make life easier😌      '.padEnd(boxWidth - 12)}|
|                        |  ||                                                                                         |
|                        |  ||                                                                                         |
|                        |  ||                                                                                         | 
|                        |  ||                                                                                         |
|                        |  ||                                                                                         |
|                        |  ||                                                                                         |
|                        |  ||${'                       😼GitHub: https://github.com/lakshyajn                            '.padEnd(boxWidth - 12)}| 
|                        |  ||${'                       ⚡Linkedin: https://www.linkedin.com/in/lakshya-jain-655bb8244    '.padEnd(boxWidth - 12)}|
|                        |  ||         __.--._                                                                         |
|                        |  ||      /~~   __.-~\\ _                                                                    |
|                        |  ||  _.-~ / _---._ ~-\\/~\\           ✨Email: lakshyajain960@gmail.com                     |
|                        |  || // /  /~/  .-  \\  /~-\                                                                 |
|                        |  ||((( /(/_(.-(-~~~~~-)_/ |                                                                 |
|                        |  || ) (( |_.----~~~~~-._\\ /                                                                | 
|                        |  ||    ) |              \\_|               💻OS: Windows and Linux used                     |
|                        |  ||     (| =-_   _.-=-  |~)        ,                                                        |
|                        |  ||      | \`~~ |   ~~'  |/~-._-'/'/_,                                                      |
|                        |  ||       \\    |        /~-.__---~ , ,                                                     |
|                        |  ||       |   ~-''     || \`\\_~~~----~                                                     |
|                        |  ||_.ssSS$$\\ -====-   / )\\_  ~~--~                                                        |
|                ___.----|~~~|%$$$$$$/ \\_    _.-~ /' )$s._        Languages: C/C++, Java, Python, Javascript, Rust &  |
|       __---~-~~        |   |%%$$$$/ /  ~~~~   /'  /$$$$$$$s__              Solidity                                  |
|     /~       ~\\    ============$$/ /        /'  /$$$$$$$$$$$SS-.                                                    |
|   /'      ./\\\\\\_( ~---._(_))$/ /       /'  /$$$$%$$$$$~      \\                                                   |
|   (      //////////(~-(..___)/$/ /      /'  /$$%$$%$$$$'         \\                                                  |
|    \\    |||||||||||(~-(..___)$/ /  /  /'  /$$$%$$$%$$$            |                                                 |
|      ''-__ //\\\\\\\\\(-.(_____) /  ///'  /$$$$%$$$$$%$             |                                                |
|         ~~""//""""""""-\\.(____) /   /'  /$$$$$%%$$$$$$\\_        /                                                  |
|                       $|//===|||  /'  /$$$$$$$%%%$$$$$( ~       ,'|  💥TechStack and Frameworks:                     |
|                   __  //$|===|%\\/  /$$$$$$$$$$$%%%%$$|      ,''  |        HTML, CSS, React, Next.js, Three.js,      |
|                  //\\ $|===|/'  /$$$$$$%$$$$$$$%%%%$(            /'        Node.js, Express, MongoDB, MySQL,         |
|                  //\\///\\|===|  /$$$$$$$$$%%$$$$$$%%%%$\\_-._    |         Postgresql, Numpy, Pandas,Tensorflow,    |
|                   ////|===| /$$$$$$$$$$$%%%$$$$$$-~~~    ~      /         Pytorch, Bootstrap                         |
|                       |///|-~~(~~-//$$$$$$$%%%////////._       ._  |                                                 |
|                      (__//--~(     ~\\\\\\\\\\\\\\\\\\\\      \\ \\    🪓Tools:                                      |
|                      (__//--~~(       \\\\\\\\\\\\\\\\\\\|      \\/          Figma, Git, Docker, Kubernetes,         |
|                       (__//--~(       ||||||||||||||||||/     _/              Streamlit, many AI and CLI tools       |
|                        (__//.--._____//////////////////__..---~~                                                     |
|                        |   //""""'''''           ___,,,,ss$$$%                                                       |
|                       //%\\__      __,,,\sssSS$$$$$$$$$$$$$$\                                                        |
|                     //%%%%$$$$$$$$$$\\;;;;\\$$$$$$$$$$$$$$%%%$\                                                      |
|                    //%%%%%%$$$$$$$$$$%\\;;;;\\$$$$$$$$$$%%%$$$$\                                                      |
|                  //%%%%%%%%$$$$$$$$$%$$$\\;;;;\\$$$$$$$%%$$$$$$,\                                                     |
|                 //%%%%%%%%%$$$$$$$$%$$$$$$\\;;;;\\$$$$%%$$$$$$$$\                                                    |
|               //%%%%%%%%%%%$$$$$$%$$$$$$$$$\\;;;;\\$%$$$$$$$$$$$\                                                     |
|                //%%%%%%%%%%%%$$$$$$$$$$$$$$$$$$\\;;;$$$$$$$$$$$$$                                                    |
|                  ""==//%%%%%%%$$$$$TuaXiong$$$$$$$$$$$$$$$$$SV"/                                                      |
|                              $$$$$$$$$$$//$$$$$$$====""""                                                            |
|                                //"""""""""~~~~                                                                       |
+${'-'.repeat(boxWidth - 2)}+
`)}
`
console.log(intro);