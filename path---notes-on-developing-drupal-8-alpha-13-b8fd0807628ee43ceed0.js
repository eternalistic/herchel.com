webpackJsonp([0xbffcc5b0e36f],{388:function(a,n){a.exports={data:{site:{siteMetadata:{title:"Mike Herchel",author:"Mike Herchel"}},markdownRemark:{id:"/Users/mherchel/sites/herchel-new/src/pages/2014-04-29-drupal-8-alpha-tips/index.md absPath of file >>> MarkdownRemark",html:'<p>Earlier this year, I decided to redevelop my site in Drupal and start blogging. Being a Drupal developer, this should be an ace in the hole. But, I chose to up the ante and do it in the yet-unrelesed version of Drupal - Drupal 8. Specifically, Drupal 8 Alpha10.</p>\n<p>Recently,. a number of dev shops have been doing similar. Yesterday, Denver’s <a href="http://www.newmediadenver.com/">New Media</a>, launched their site, and even before that, Swiss company Amazee Labs launched <a href="http://www.amazeelabs.com/en">their site</a>.</p>\n<p>So, here I am.</p>\n<h2>Freaking awesome</h2>\n<p>The first thing that really amazes me about D8 is that you can finally develop an entire basic website in core. This is radically different that in previous versions. In Drupal 6, you had to install CCK, and Views. Drupal 7 saw CCK moved into core, but Views was still in contrib. Drupal 8 brings Views into core, along with several Field API modules like date (enable date/time fields), entity reference (reference between articles, images, content, etc), and more.</p>\n<h2>Some minor issues… and a major</h2>\n<p>I ran into several minor issues, and one major one during the development process. The minor ones mainly consisted of UI quirks. And the major issue was simply trying to get Jquery to load for anonymous users.</p>\n<p>My mobile menu uses Jquery to toggle a class on and off. This should be pretty straightforward. In Drupal 7 it was- Jquery is always loaded. In Drupal 8, though, Jquery is only loaded when it needs to be. This is fantastic- why load a ~100k library if its not being used?</p>\n<p>The problem that I ran into is a known one. Adding the dependency into my theme’s YAML libraries file didn’t work. Luckily I had a bit of help from the west coast in the form of Danny Englander (who maintains the Gratis theme and it’s D8 version)</p>\n<h2>Div-itis</h2>\n<p>If you haven’t heard yet, Drupal’s theming system is getting a complete rewrite. In addition to pulling out and replacing Drupal’s old PHPTemplate templating system with Twig (the templating engine used by the Symfony2 framework), many developers are working on making Drupal’s default markup to be more simple and semantic.</p>\n<p>That all being said, work is still being done. This is the markup generated from a simple custom text block.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-edit-entity-id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom_block/1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>block block-custom-block contextual-region<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>block-callout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-contextual-id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>block:block=callout:|custom_block:custom_block=1:changed=1396462689<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>field field-custom-block--body field-name-body field-type-text-with-summary field-label-hidden<span class="token punctuation">"</span></span> <span class="token attr-name">data-edit-field-id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom_block/1/body/und/full<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>field-items<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>field-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        Actual Text.\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Ugh. Something like this might be more appropriate:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-edit-entity-id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom_block/1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>block block-custom-block contextual-region<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>block-callout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Actual Text.\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>One Div. No bullshit :)</p>\n<p>Like I mentioned before, I’m not the only one who cares about this. This problem is being worked on in issues <a href="https://drupal.org/node/2214241">2214241</a> and <a href="https://drupal.org/node/2160611">2160611</a>, as well as others. Hopefully, these will make it into D8.</p>\n<h2>A couple other interesting tidbits</h2>\n<ul>\n<li>You can’t disable modules. You need to uninstall them.</li>\n<li>Right now, there’s no path<em>to</em>theme() function. This is being <a href="https://drupal.org/node/2168231">worked on</a>.</li>\n<li>YAML is super-easy to work with (much more so than PHP)</li>\n</ul>\n<h2>So what now?</h2>\n<p>Currently, alpha versions of Drupal are not upgradable - meaning that I have to blow away my installation (data, config, and everything) to upgrade. This will change once beta1 comes out (or at least it should). Beta versions will be upgradable.</p>\n<p>I don’t plan on chasing HEAD or upgrading until the stable release is put out. Even then, I may wait a bit. Chances are I’ll have to refactor my theme and rebuild everything… but that shouldn’t be too much of an issue on a small site like this.</p>\n<p>The value is that I had a chance to learn about the Drupal 8. I was super excited about it before, and working with it makes me even more pumped. Even in it’s current Alpha 10 state, its still fairly stable with only minor issues appearing (at least for this small site).</p>\n<p>I firmly believe that Drupal 8 is going to freaking rock on so many levels.</p>\n<p>When is it going to be released? Probably late summer. I’m calling it now: August 4th :p</p>',frontmatter:{title:"Notes on Developing with Drupal 8 (Alpha 10)",date:"April 29, 2014"}}},pathContext:{path:"/notes-on-developing-drupal-8-alpha13/"}}}});
//# sourceMappingURL=path---notes-on-developing-drupal-8-alpha-13-b8fd0807628ee43ceed0.js.map