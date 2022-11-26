import json
import os.path
import asyncio
import aiohttp

USERNAME = 'junhoyeo'
ALLOWED_KEYS = [
  'name',
  'description',
  'html_url',
  'language',
  'homepage',
  'stargazers_count',
  'watchers_count',
  'forks_count',
  'open_issues',
  'fork',
  'archived',
  'created_at',
  'updated_at',
]

url = f'https://api.github.com/users/{USERNAME}/repos?per_page=100'

dir_path = os.path.dirname(os.path.realpath(__file__))
file_path = os.path.join(dir_path, './github-repositories.json')

async def main():
  page = 1
  repos = []

  while page != None:
    async with aiohttp.ClientSession() as session:
      async with session.get(f'{url}&page={page}') as response:
          data = await response.text()
          curr = json.loads(data)

          repos += curr
          page += 1

          if len(curr) == 0:
            page = None

  repos = [{ key: repo[key] for key in ALLOWED_KEYS } for repo in repos]

  with open(file_path, 'w') as file:
    json.dump(repos, file, ensure_ascii=False, indent=2, sort_keys=True)

    # add newline to eof
    file.write('\n')

asyncio.run(main())
