const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\DELL\\.gemini\\antigravity\\scratch\\golfgreenpujo\\thinktrek_about.html', 'utf8');

const regex = /<img[^>]+src="([^"]+)"[^>]*>[\s\S]*?<h3 class="elementor-image-box-title">([^<]+)<\/h3><p class="elementor-image-box-description">([^<]+)<\/p>/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[2].trim(), '|', m[3].trim(), '|', m[1]);
}
