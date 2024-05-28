import boxen from "boxen";
import chalk from "chalk";
import clear from "clear";
import axios from "axios";

clear();

const getGithubProfile = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get(url);
  const data = {
    name: chalk.red.bold(response.data.name),
    username: chalk.blue.bold(response.data.login),
    location: chalk.green.bold(response.data.location),
    bio: chalk.yellow.bold(response.data.bio),
    public_repos: chalk.magenta.bold(response.data.public_repos),
    followers: chalk.cyan.bold(response.data.followers),
    following: chalk.gray.bold(response.data.following),
    created_at: chalk.white.bold(response.data.created_at.substring(0, 10)),
    updated_at: chalk.white.bold(response.data.updated_at.substring(0, 10)),
    avatar_url: chalk.hex('#FFA500').bold(response.data.avatar_url),
    github_url: chalk.hex('#800080').bold(response.data.html_url),

    labelName: chalk.white.bold('Name:'),
    labelUsername: chalk.white.bold('Username:'),
    labelLocation: chalk.white.bold('Location:'),
    labelBio: chalk.white.bold('Bio:'),
    labelPublicRepos: chalk.white.bold('Public Repos:'),
    labelFollowers: chalk.white.bold('Followers:'),
    labelFollowing: chalk.white.bold('Following:'),
    labelCreatedAt: chalk.white.bold('Created At:'),
    labelUpdatedAt: chalk.white.bold('Updated At:'),
    labelAvatarUrl: chalk.white.bold('Avatar URL:'),
    labelGithubUrl: chalk.white.bold('Github URL:'),
  }

  const output = boxen(
    [
      `${data.labelName} ${data.name}`,
      `${data.labelUsername} ${data.username}`,
      `${data.labelLocation} ${data.location}`,
      `${data.labelBio} ${data.bio}`,
      `${data.labelPublicRepos} ${data.public_repos}`,
      `${data.labelFollowers} ${data.followers}`,
      `${data.labelFollowing} ${data.following}`,
      `${data.labelCreatedAt} ${data.created_at}`,
      `${data.labelUpdatedAt} ${data.updated_at}`,
      `${data.labelAvatarUrl} ${data.avatar_url}`,
      `${data.labelGithubUrl} ${data.github_url}`,
    ].join('\n'),
    {
      padding: 1,
      float: 'center',
      margin: 1,
      borderStyle: 'singleDouble',
      borderColor: 'green'
    }
  )
  console.log(output);
}

const getGithubRepos = async (username) => {
  const url = `https://api.github.com/users/${username}/repos`;
  const response = await axios.get(url);
  const data = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 5);
  const output = data.map((repo) => {
    const box = boxen(
      [
        chalk.white.bold('Name:') + ' ' + chalk.red.bold(repo.name),
        repo.description ? chalk.white.bold('Description:') + ' ' + chalk.blue.bold(repo.description) : '',
        chalk.white.bold('Language:') + ' ' + chalk.green.bold(repo.language),
        chalk.white.bold('Created At:') + ' ' + chalk.yellow.bold(repo.created_at.substring(0, 10)),
        chalk.white.bold('Updated At:') + ' ' + chalk.magenta.bold(repo.updated_at.substring(0, 10)),
        chalk.white.bold('Github URL:') + ' ' + chalk.cyan.bold(repo.html_url),
        chalk.white.bold('Clone URL:') + ' ' + chalk.gray.bold(repo.clone_url)
      ].join('\n'),
      {
        padding: 1,
        float: 'center',
        margin: 1,
        borderStyle: 'arrow',
        borderColor: 'green',
        width: 75,
        height: 15
      }
    )
    console.log(box);
  });
}


export { getGithubProfile, getGithubRepos };