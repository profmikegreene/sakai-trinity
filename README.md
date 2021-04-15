# sakai-trinity

Mockups for user testing new Sakai UI.

## Contributors

@fostersdesign  
@profmikegreene  

## Icons

Icon set used is <https://ionicons.com/>

To add a new icon

1. Select the icon from the list
2. Click the download SVG button
3. Save to the icons folder
4. Add relevant markup

## Docker

```sh
docker-compose run --rm --service-ports node
npm install -g browser-sync
browser-sync start --server --files "./*"
```

## TODO

- [ ] figure out how to install browser-sync globally in dockerfile
- [ ] auto inject screenshot via puppeteer in pull request
