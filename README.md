This is my personalised npx card which can be used to contact me. Will be adding some more functions to this in the future. Appreciating ```stars``` if you like the project and want to try this for your self.

How to run - just hit 👇

```
npx night-slayer18
```

The final output will look something like this
```
                                     ╭──────────────────────────────────────────────────────────────────────╮
                                     │                                                                      │
                                     │                                                                      │
                                     │                               SamanuaiA                              │
                                     │                                                                      │
                                     │          Student: Computer Science Engineering at FISAT, Angamaly    │
                                     │                                                                      │
                                     │          Twitter: https://twitter.com/NiGhTsL93934079                │
                                     │           GitHub: https://github.com/night-slayer18                  │
                                     │         LinkedIn: https://linkedin.com/in/samanuai                   │
                                     │        Instagram: https://instagram.com/_n_i_g_h_t__s_l_a_y_e_r_     │
                                     │       HackerRank: https://hackerrank.com/profile/S4M4NU4i            │
                                     │                                                                      │
                                     │            Email: samanuaia257@gmailcom                              │
                                     │                                                                      │
                                     │              Web: https://nightslayer.me                             │
                                     │                                                                      │
                                     │             Card: npx night-slayer18                                 │
                                     │                                                                      │
                                     │      I am currently looking for new opportunities,                   │
                                     │      my inbox is always open. Whether you have a                     │
                                     │      question or just want to say hi,I will try                      │
                                     │      my best to get back to you!                                     │
                                     │                                                                      │
                                     │                                                                      │
                                     ╰──────────────────────────────────────────────────────────────────────╯
```

#### STEPS TO CREATE YOUR OWN
The article written by our friend <a href="https://github.com/jackboberg" target="_blank">@jackboberg</a>. I used the same for the reference to deploy the package. Write a <a href="https://studioelsa.se/blog/open-source-oss-npx-business-card/" target="_blank">Simple npx Business Card.</a>
Do check out <a href="https://github.com/anmol098"> @anmol098</a> for the original work. Do give a star for him too.

#### npm init

Start a new ```node``` project and name it whatever you want. You could choose to name it after the executable you want to expose. It’s not necessary but conventions are nice, and it makes your binary more ```npx``` friendly.

```
mkdir night-slayer18
cd night-slayer18
npm init -y
```

At first, let’s get the necessary CLI working.

```
lvim index.js
```
Now add the necessary logic you want into the file

```
console.log("Content")
```

You can execute your new CLI like this:

```
node index
```

#### ship it

That’s an entirely functional first release! You just need to modify your package.json to let npm know to link your executable and you are off:
```
{
   name: "your_package_name",
  // ...
  "bin": {
    "your_package_name": "./index.js
  },
  // ....
}
```
By default, ```npm``` will expose your binary using the same name as your package. You can configure this if it’s not what you want, but it will make your executable harder to use with npx.

Share your new CLI with the world!
```
npm version patch
npm publish
```
Now anyone can leverage your new CLI using npx, without needing to install it locally:
```
npx $YOUR_PACKAGE_NAME
```

