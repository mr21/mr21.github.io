window.data = [
	{
		rub: "projects",
		data: [
			{
				name: "youtube-playlists-manager",
				img: "https://mr21.github.io/YouTube-playlists-manager/thumbnail.jpg",
				href: "http://mr21.fr/YouTube-playlists-manager/",
				title: {
					icon: "fa-youtube-play",
					span: "YouTube - playlists manager"
				},
				appLink: {
					en: "Organize your playlists now&nbsp;!",
					fr: "Organisez vos playlists maintenant&nbsp;!"
				},
				tags: [
					{ name: "javascript",       title: "JavaScript" },
					{ name: "jquery",           title: "jQuery" },
					{ name: "jquery-selection", title: "jQuery-selection" },
					{ name: "jquery-dragndrop", title: "jQuery-dragndrop" },
					{ name: "jquery-tabs",      title: "jQuery-tabs" },
					{ name: "diff.js",          title: "diff.js" }
				],
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<div>"+
								"<p lang='en'>"+
									" I'm a guy who fully uses <b>YouTube's playlists</b> and I'm also"+
									" passionate about <b>UX</b> (<b>U</b>ser e<b>X</b>perience)."+
									" Currently on youtube.com it's relatively complex to perform"+
									" certain actions with the actual system, such as move a video"+
									" from a playlist to another or to move several items at the same"+
									" time. Some other actions requires too many clicks like changing"+
									" the privacy or the name of the playlist."+
								"</p>"+
								"<p lang='en'>"+
									" So I have decided to make something different, a web application"+
									" to simplify everything. Now you can <b>edit</b> all your playlists"+
									" and videos <b>in some few clicks</b>. And even if you don't need"+
									" to edit anything you can <b>have an eye on all your playlists and"+
									" their videos</b>. It's really enjoyable to play some music by"+
									" clicking easily where you want :)"+
								"</p>"+
								"<p lang='fr'>"+
									" Je suis quelqu'un qui utilise tout le temps les <b>playlists"+
									" YouTube</b> et je suis aussi passionné d'<b>UX</b>"+
									" (e<b>X</b>périence <b>U</b>tilisateur). Actuellement sur"+
									" youtube.com il est relativement difficile de faire certaines"+
									" actions avec le système actuel, telle que déplacer une vidéo"+
									" d'une playlist à une autre ou d'en déplacer plusieurs à la fois."+
									" D'autres actions requièrent aussi trop de cliques comme changer"+
									" la <i>privacy</i> ou le nom d'une playlist."+
								"</p>"+
								"<p lang='fr'>"+
									" Du coup j'ai décidé de faire quelque chose de différent, une"+
									" application web pour tout simplifier. Maintenant vous pouvez"+
									" <b>éditer</b> toutes vos playlists et videos <b>en quelques"+
									" cliques</b>. Et même si vous n'avez pas besoin d'éditer quoi"+
									" que ce soit il est très pratique avec cette application"+
									" d'<b>avoir un œil sur toutes vos playlists et vidéos</b>."+
									" C'est plutôt cool de pouvoir jouer n'importe quelle musique"+
									" en cliquant facilement où l'on veut :)"+
								"</p>"+
							"</div>"
					}, {
						title: {
							icon: "fa-medkit",
							en: "How it's work&nbsp;?",
							fr: "Comment ça marche&nbsp;?"
						},
						content:
							"<div>"+
								"<p>"+
									"<span lang='en'>If you click this button&nbsp;:</span>"+
									"<span lang='fr'>Si vous cliquez sur ce bouton&nbsp;:</span>"+
									"<b> <i class='fa fa-sign-in'></i> Login with Google</b>"+
									"<span lang='en'>"+
										" a Google's popup will appear to connect you to your personnal"+
										" YouTube account directly. After that you will be able to manage"+
										" your own playlists by rename it, reorder the videos, etc. Once"+
										" you have completed your changes, you will be able to summarize"+
										" all changes with a diff viewing by clicking this"+
										" button&nbsp;:&nbsp;<i class='fa fa-save'></i>&nbsp;."+
									"</span>"+
									"<span lang='fr'>"+
										" une popup Google va apparaître pour vous connecter directement"+
										" à votre compte YouTube personnel. Après ça vous serez en mesure"+
										" de gérer vos propres playlists en les renommant, en changeant"+
										" l'ordre des vidéos, etc. Une fois que vous aurez terminé vos"+
										" changements, vous aurez la possibilité d'avoir resumé des"+
										" modifications en cliquant sur ce"+
										" bouton&nbsp;:&nbsp;<i class='fa fa-save'></i>&nbsp;."+
									"</span>"+
								"</p>"+
								"<p>"+
									"<span lang='en'>"+
										" When the <i>diff page</i> appear you have the choice to cancel"+
										" all these changes or save it on your YouTube account. On this"+
										" page you will see different icons etc. you can understand"+
										" easily with this picture&nbsp;: "+
									"</span>"+
									"<span lang='fr'>"+
										" Quand la page résumant les changements apparaît, vous avez le"+
										" choix de tout annuler ou de tout sauvegarder sur votre compte"+
										" YouTube à vous. Sur cette page vous verrez différentes icônes"+
										" etc. que vous pouvez comprendre facilement à l'aide de cette"+
										" image&nbsp;: "+
									"</span>"+
									"<a target='_blank' href='YouTube-playlists-manager/img/help-diff.jpg'><b>help.jpg</b></a>."+
								"</p>"+
							"</div>"
					}, {
						title: {
							icon: "fa-newspaper-o",
							en: "What's new&nbsp;?",
							fr: "Quoi de neuf&nbsp;?"
						},
						content:
							"<ul>"+
								"<li>"+
									"<b>1.0</b>"+
									"<ul>"+
										"<li lang='en'>Editing of the name and the privacy of your playlists.</li>"+
										"<li lang='en'>Reordering of all the videos by drag and drop.</li>"+
										"<li lang='en'>Multi-channels with tabs.</li>"+
										"<li lang='fr'>Édition du nom et de la <i>privacy</i> des playlists.</li>"+
										"<li lang='fr'>Réorganisation de toutes les vidéos par <i>drag and drop</i>.</li>"+
										"<li lang='fr'>Multi-channels avec des onglets.</li>"+
									"</ul>"+
								"</li>"+
							"</ul>"
					}, {
						title: {
							icon: "fa-code",
							en: "Development",
							fr: "Développement"
						},
						content:
							"<div>"+
								"<p lang='en'>"+
									" This application use the <b>Google's API</b> with the"+
									" <b>JavaScript <i>gapi.js</i> client</b>. In other way,"+
									" the development of this project required several other"+
									" JavaScript projects including <b>three jQuery plugins</b>&nbsp;:"+
								"</p>"+
								"<p lang='fr'>"+
									" Cette application utilise l'<b>API Google</b> avec le"+
									" <b>client JavaScript <i>gapi.js</i></b>. D'un autre côté,"+
									" le développement de ce projet à requis plusieurs autres"+
									" projets JavaScript dont <b>trois plugins jQuery</b>&nbsp;:"+
								"</p>"+
								"<ul>"+
									"<li>"+
										"<a target='_blank' href='http://mr21.fr/jquery-selection'>jQuery-selection</a>"+
										"<span lang='en'> to manage the <b>selection of multiple videos</b> simultaneously with the <b>Ctrl</b> and <b>Shift</b> keys on the keyboard.</span>"+
										"<span lang='fr'> pour gérer la <b>sélection multiple des vidéos</b> avec les touches <b>Ctrl</b> et <b>Shift</b> du clavier.</span>"+
									"</li>"+
									"<li>"+
										"<a target='_blank' href='http://mr21.fr/jquery-dragndrop'>jQuery-dragndrop</a>"+
										"<span lang='en'> to manage the <b>drag and drop</b> of the videos.</span>"+
										"<span lang='fr'> pour gérer le <b>drag and drop</b> des videos.</span>"+
									"</li>"+
									"<li>"+
										"<a target='_blank' href='http://mr21.fr/jquery-tabs'>jQuery-tabs</a>"+
										"<span lang='en'> to have some <b>movable tabs</b>.</span>"+
										"<span lang='fr'> pour avoir des <b>onglets déplacables</b>.</span>"+
									"</li>"+
									"<li>"+
										"<a target='_blank' href='http://github.com/mr21/diff.js'>diff.js</a>"+
										"<span lang='en'> to make the resume of the modifications before saving.</span>"+
										"<span lang='fr'> pour faire le résumé des modifications avant la sauvegarde.</span>"+
									"</li>"+
								"</ul>"+
							"</div>"
					}, {
						title: {
							icon: "fa-heart",
							en: "Special thanks",
							fr: "Remerciements"
						},
						content:
							"<p>"+
								"<span lang='en'>I really want to thank </span>"+
								"<span lang='fr'>Je tiens à remercier </span>"+
								"<a target='_blank' href='http://jeremiemarais.eu/'><b>Jérémie Marais</b></a>"+
								"<span lang='en'> and </span>"+
								"<span lang='fr'> et </span>"+
								"<a target='_blank' href='http://melanieducani.com/'><b>Mélanie Ducani</b> aka <b>Misty</b></a>"+
								"<span lang='en'>"+
									" for bringing some ideas to this project, reporting many"+
									" bugs and also… being awesome."+
								"</span>"+
								"<span lang='fr'>"+
									" pour avoir apportés des idées à ce projet, remontés tout"+
									" un tas de bugs et aussi… être géniaux."+
								"</span>"+
							"</p>"
					}
				]
			}, {
				name: "killdemall",
				img: "http://mr21.fr/KillDemAll/thumbnail.jpg",
				href: "http://mr21.fr/KillDemAll/",
				title: {
					icon: "fa-gamepad",
					span: "KillDemAll"
				},
				appLink: {
					en: "Click and play&nbsp;!",
					fr: "Cliquez pour jouer&nbsp;!"
				},
				tags: [
					{ name: "javascript", title: "JavaScript" },
					{ name: "canvas",     title: "Canvas" },
					{ name: "canvasloth", title: "Canvasloth" },
					{ name: "photoshop",  title: "Photoshop" }
				],
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" This projects is a <b>tiny-game</b>, more precisely a <b><i>shoot'em up</i></b>."+
									" The principle is very simple&nbsp;:"+
									" We control a spaceship that must destroy some others without being touched for earn some points."+
									" It's developed in <b>JavaScript</b> with the element <b>HTML5 &lt;canvas&gt;</b>."+
								"</span>"+
								"<span lang='fr'>"+
									" Ce projet est un <b>mini-jeu</b> ou plus précisément un <b><i>shoot'em up</i></b>."+
									" Le principe est très simple&nbsp;:"+
									" On contrôle un vaisseau qui doit en détruire d'autres sans se faire toucher pour gagner des points."+
									" Il est développé en <b>JavaScript</b> avec l'élément <b>HTML5 &lt;canvas&gt;</b>."+
								"</span>"+
							"</p>"
					}, {
						title: {
							icon: "fa-keyboard-o",
							en: "How to play&nbsp;?",
							fr: "Comment jouer&nbsp;?"
						},
						content:
							"<ul>"+
								"<li>"+
									"<code>W A S D</code>"+
									"<span lang='en'> move the ship, it's works also with <code>Z Q S D</code>.</span>"+
									"<span lang='fr'> déplace le vaisseau, fonctionne aussi avec <code>Z Q S D</code>.</span>"+
								"</li>"+
								"<li>"+
									"<code>"+
										"<i class='fa fa-arrow-up'></i>"+
										"<i class='fa fa-arrow-right'></i>"+
										"<i class='fa fa-arrow-down'></i>"+
										"<i class='fa fa-arrow-left'></i>"+
									"</code>"+
									"<span lang='en'> fire with the 8 turrets.</span>"+
									"<span lang='fr'> tire avec les huits tourelles.</span>"+
								"</li>"+
								"<li>"+
									"<code lang='en'>Mouse</code>"+
									"<code lang='fr'>Souris</code>"+
									"<span lang='en'> aim the cannon.</span>"+
									"<span lang='fr'> dirige le canon.</span>"+
								"</li>"+
								"<li>"+
									"<code lang='en'>Left click</code>"+
									"<code lang='fr'>Clique gauche</code>"+
									"<span lang='en'> fire with the cannon.</span>"+
									"<span lang='fr'> tire avec le canon.</span>"+
								"</li>"+
							"</ul>"
					}
				]
			}, {
				name: "artificial-orbit-simulation",
				img: "https://mr21.github.io/artificial-orbit-simulation/thumbnail.jpg",
				href: "http://mr21.fr/artificial-orbit-simulation/",
				title: {
					icon: "fa-rocket",
					span: "Artificial Orbit Simulation"
				},
				appLink: {
					en: "3 … 2 … 1 … lift off&nbsp;!",
					fr: "3 … 2 … 1 … décollage&nbsp;!"
				},
				tags: [
					{ name: "javascript", title: "JavaScript" },
					{ name: "canvas",     title: "Canvas" },
					{ name: "canvasloth", title: "Canvasloth" },
					{ name: "photoshop",  title: "Photoshop" }
				],
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<div>"+
								"<p>"+
									"<span lang='en'>"+
										" This app is a small <b>&lt;canvas&gt; experiment</b> who simulates"+
										" the gravity around the Earth. You can control a tiny ship"+
										" <i class='fa fa-rocket'></i> with the arrow keys of your keyboard"+
									"</span>"+
									"<span lang='fr'>"+
										" Cette application est une petite <b>expérimentation &lt;canvas&gt;</b> qui"+
										" simule la gravité autour de la Terre. Vous pouvez contrôler un petit satellite"+
										" <i class='fa fa-rocket'></i> avec les flèches directionnelles du clavier"+
									"</span>"+
									" <i class='fa fa-arrow-up'></i>"+
									" <i class='fa fa-arrow-right'></i>"+
									" <i class='fa fa-arrow-down'></i>"+
									" <i class='fa fa-arrow-left'></i> ."+
									"<span lang='en'>"+
										" So, it's easy to <b>understand</b> how"+
										" <b>the placement into orbit</b> around a planet works.<br/>"+
										" I wanted to code this page after seeing the video&nbsp;: "+
									"</span>"+
									"<span lang='fr'>"+
										" Ainsi, il est facile de <b>réaliser</b> comment fonctionne"+
										" <b>le placement en orbite</b> d'un objet autour d'une planète.<br/>"+
										" J'ai voulu coder cette chose après avoir vu cette vidéo&nbsp;: "+
									"</span>"+
									"<a href='http://youtu.be/t-nWPBBWRZs' target='_blank'>e-penser (Ep.03)</a>."+
									"<span lang='en'>"+
										" Inside is explained several things like the reason why there is no need"+
										" of energy to maintaining an object into its orbit."+
										" Or understand there is no place without gravity especially just near the atmosphere, etc."+
									"</span>"+
									"<span lang='fr'>"+
										" Il y est expliqué plusieurs choses telle que la raison qui fait"+
										" qu'il n'y a pas besoin d'énergie pour maintenir un objet sur son orbite."+
										" Ou comprendre qu'il n'y a aucun lieu sans gravité notamment entre la Terre et la Lune, etc."+
									"</span>"+
								"</p>"+
								"<p lang='en'>"+
									" And for the fun, you can choose which object of the scene becomes the"+
									" referencial for the camera by clicking the buttons at the bottom&nbsp;:"+
								"</p>"+
								"<p lang='fr'>"+
									" Pour plus de fun, il est possible de choisir quels objets devient le"+
									" référentiel pour la caméra en cliquant sur les boutons en bas&nbsp;:"+
								"</p>"+
								"<ul>"+
									"<li>"+
										"<span lang='en'>The <b>ship</b> </span>"+
										"<span lang='fr'>Le <b>satellite</b> </span>"+
										"<i class='fa fa-rocket'></i>"+
									"</li>"+
									"<li>"+
										"<span lang='en'>The <b>Earth</b> </span>"+
										"<span lang='fr'>La <b>Terre</b> </span>"+
										"<i class='fa fa-globe'></i>"+
									"</li>"+
									"<li>"+
										"<span lang='en'>Or the <b>Universe</b> </span>"+
										"<span lang='fr'>Ou l'<b>Univers</b> </span>"+
										"<i class='fa fa-compass'></i>"+
										"<span lang='en'> (in this mode the background will doesn't move)</span>"+
										"<span lang='fr'> (dans ce mode le fond ne tourne pas)</span>"+
									"</li>"+
								"</ul>"+
								"<p>"+
									"Enjoy :D<br/>"+
									"<small lang='en'>Sorry but it's seem to be slow on <i>Firefox</i> :(</small>"+
									"<small lang='fr'>Désolé mais il semble que ça soit très lent sur <i>Firefox</i> :(</small>"+
								"</p>"+
							"</div>"
					}
				]
			}, {
				name: "jquery-dragndrop",
				img: "https://mr21.github.io/jquery-dragndrop/thumbnail.jpg",
				href: "http://mr21.fr/jquery-dragndrop/",
				title: {
					icon: "fa-plug",
					span: "jQuery - dragndrop"
				},
				appLink: {
					en: "Try the demo&nbsp;!",
					fr: "Testez la démo&nbsp;!"
				},
				tags: [
					{ name: "javascript", title: "JavaScript" },
					{ name: "jquery",     title: "jQuery" }
				],
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" This plugin offers a fluide <b>drag and drop with great visual feedback</b> to the user."+
									" jquery-dragndrop can works alone but if you want the possibility"+
									" to select several items in the same time with the"+
									" <code>Ctrl</code> / <code><i class='fa fa-apple'></i></code> / <code>Shift</code> keys,"+
									" you have to include also this one&nbsp;: "+
								"</span>"+
								"<span lang='fr'>"+
									" Ce plugin propose un <b><i>drag and drop</i> avec beaucoup de retours visuel</b> pour l'utilisateur."+
									" jquery-dragndrop peut fonctionner seul mais si vous voulez la possibilité"+
									" de sélectionner plusieurs items à la fois avec les touches"+
									" <code>Ctrl</code> / <code><i class='fa fa-apple'></i></code> / <code>Shift</code>,"+
									" vous devrez aussi inclure celui-là&nbsp;: "+
								"</span>"+
								"<a href='##add(p, jquery-selection)'>jquery-selection</a>."+
							"</p>"
					}
				]
			}, {
				name: "jquery-tabs",
				img: "https://mr21.github.io/jquery-tabs/thumbnail.jpg",
				href: "http://mr21.fr/jquery-tabs/",
				title: {
					icon: "fa-plug",
					span: "jQuery - tabs"
				},
				appLink: {
					en: "Try the demo&nbsp;!",
					fr: "Testez la démo&nbsp;!"
				},
				tags: [
					{ name: "javascript",       title: "JavaScript" },
					{ name: "jquery",           title: "jQuery" },
					{ name: "jquery-dragndrop", title: "jQuery-dragndrop" }
				],
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" This is another plugin to manage some tabs. By default this"+
									" plugin propose something very basic, just like jqueryui-tabs."+
									" But the amazing here is if you also include the plugin"+
									" <a href='##toggle(p, jquery-dragndrop)'>jquery-dragndrop</a>"+
									" in your HTML, you'll be able to reorder the tabs as you want"+
									" with your mouse (like Chrome or Sublime Text for example)."+
								"</span>"+
								"<span lang='fr'>"+
									" Ceci est un énième plugin pour gérer des onglets. Par défaut"+
									" ça donne quelque chose de très basique comme jqueryui-tabs."+
									" Mais l'incroyable ici est dans le cas ou"+
									" <a href='##toggle(p, jquery-dragndrop)'>jquery-dragndrop</a>"+
									" est aussi inclus dans le HTML, il sera alors possible de"+
									" réorganiser les onglets directement avec la souris (comme"+
									" avec Chrome ou Sublime Text par exemple)."+
								"</span>"+
							"</p>"
					}
				]
			}, {
				name: "canvasloth",
				img: "https://mr21.github.io/canvasloth/thumbnail.jpg",
				href: "http://mr21.fr/canvasloth/",
				title: {
					icon: "fa-html5",
					span: "Canvasloth"
				},
				appLink: {
					en: "Try the demo&nbsp;!",
					fr: "Testez la démo&nbsp;!"
				},
				tags: [
					{ name: "javascript", title: "JavaScript" },
					{ name: "html5",      title: "HTML5" }
				],
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" Canvasloth is a <b>very minimal</b> framework to manage an"+
									" <b>HTML5-Canvas application</b>. It manages the <b>events</b>,"+
									" prepares the <b>DOM for the HUD</b>, <b>waits</b> until all"+
									" <b>the assets</b> are loaded, <b>cancels</b> the <b>keys repetition</b>"+
									" of the keyboard, provides a tiny <b>time manager</b> and that's it."+
								"</span>"+
								"<span lang='fr'>"+
									" Canvasloth est un framework <b>très minime</b> pour gérer une"+
									" <b>application Canvas HTML5</b>. Il gère les <b>événements</b>,"+
									" prépare le <b>DOM pour le HUD</b>, <b>attend</b> jusqu'à ce"+
									" que toutes <b>les ressources</b> soient chargées, <b>annule</b>"+
									" la <b>répétition des touches</b> du clavier, fournit un simple"+
									" <b>gestionnaire de temps</b> et c'est tout."+
								"</span>"+
							"</p>"
					}
				]
			}, {
				name: "windows8-loading",
				img: "https://mr21.github.io/css-animations/windows8-loading/thumbnail.jpg",
				href: "http://mr21.fr/css-animations/windows8-loading/",
				title: {
					icon: "fa-css3",
					span: "Windows8 - loading"
				},
				appLink: {
					en: "See it in action&nbsp;!",
					fr: "Voir la démo&nbsp;!"
				},
				tags: [
					{ name: "css3", title: "CSS3" },
					{ name: "sass", title: "Sass" }
				],
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" This is a tiny <b>Sass</b> projects, wherein I have reproduced the"+
									" tiny animation who makes everybody waiting on <b>Windows 8</b> only"+
									" with the <b>@keyframes</b> offered by the <b>CSS3</b>. I have also"+
									" changed a little detail at the end of the loop."+
								"</span>"+
								"<span lang='fr'>"+
									" Ceci est un petit projet <b>Sass</b>, où j'ai reproduit l'animation"+
									" de chargement qui fait attendre tout le monde sur <b>Windows 8</b>"+
									" uniquement avec les <b>@keyframes</b> offertes par le <b>CSS3</b>."+
									" J'ai aussi changé un petit détail sur la fin de la boucle."+
								"</span>"+
							"</p>"
					}
				]
			}, {
				name: "learncss",
				img: "https://mr21.github.io/learnCSS/thumbnail.jpg",
				href: "http://mr21.fr/learnCSS/",
				title: {
					icon: "fa-css3",
					span: "LearnCSS"
				},
				appLink: {
					en: "Learn interactively all the CSS selectors&nbsp;!",
					fr: "Apprendre interactivement tous les sélecteurs CSS&nbsp;!"
				},
				tags: [
					{ name: "css3",       title: "CSS3" },
					{ name: "javascript", title: "JavaScript" }
				],
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" This project is just a simple page for <b>educational purposes</b>. It"+
									" list many examples of <b>CSS selection</b> on which it's possible"+
									" to click to see in real time which elements are selected."+
								"</span>"+
								"<span lang='fr'>"+
									" Ce projet se résume à une simple page <b>à des fins éducatives</b>. Elle"+
									" liste de nombreux exemples de <b>sélections CSS</b> sur lesquelles"+
									" il est possible de cliquer pour voir en temps réel quels éléments"+
									" sont sélectionnés."+
								"</span>"+
							"</p>"
					}, {
						title: {
							icon: "fa-list-ul",
							en: "List of the CSS selectors",
							fr: "Liste des sélecteurs CSS"
						},
						content:
							"<div>"+
								"<ul lang='en'>"+
									"<li><code>#id</code></li>"+
									"<li><code>.class</code></li>"+
									"<li><code>[attribute]</code></li>"+
									"<li><code>:pseudo-class</code></li>"+
									"<li><code>&gt; children</code></li>"+
									"<li><code>+ brother</code></li>"+
									"<li><code>~ brothers</code></li>"+
									"<li><code>, grouping</code></li>"+
								"</ul>"+
								"<ul lang='fr'>"+
									"<li><code>#id</code></li>"+
									"<li><code>.class</code></li>"+
									"<li><code>[attribut]</code></li>"+
									"<li><code>, grouping</code></li>"+
									"<li><code>&gt; fils</code></li>"+
									"<li><code>+ frère</code></li>"+
									"<li><code>~ frères</code></li>"+
									"<li><code>:pseudo-classe</code></li>"+
								"</ul>"+
							"</div>"
					}
				]
			}, {
				name: "gitfast",
				img: "https://mr21.github.io/GitFast/thumbnail.jpg",
				href: "https://github.com/Mr21/GitFast",
				title: {
					icon: "fa-git-square",
					span: "GitFast"
				},
				appLink: {
					en: "Access to the repo&nbsp;!",
					fr: "Aller sur le repo&nbsp;!"
				},
				tags: [
					{ name: "git",  title: "Git" },
					{ name: "bash", title: "Bash" }
				],
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" <b>GitFast.sh</b> is a <b>Bash</b> shell script file offering many"+
									" intelligent <b>aliases</b> to accelerate the use of <b>Git</b>"+
									" on the command line."+
								"</span>"+
								"<span lang='fr'>"+
									" <b>GitFast.sh</b> est un script shell pour <b>Bash</b> offrant une serie"+
									" d'<b>alias</b> intelligents pour accélérer l'usage de <b>Git</b>"+
									" en ligne de commande."+
								"</span>"+
							"</p>"
					}, {
						title: {
							icon: "fa-list-ul",
							en: "The list of proposed aliases&nbsp;?",
							fr: "La liste des alias proposés&nbsp;?"
						},
						content:
							"<div>"+
								"<table>"+
								"<thead>"+
									"<tr>"+
										"<td class='alias'>Alias</td>"+
										"<td>"+
											"<span lang='en'>Git equivalent</span>"+
											"<span lang='fr'>Équivalent Git</span>"+
										"</td>"+
									"</tr>"+
								"</thead>"+
								"<tbody>"+
									"<tr><td><code>gst</code></td>             <td><code>git status</code></td></tr>"+
									"<tr><td><code>gad</code></td>             <td><code>git add -A ; git status</code></td></tr>"+
									"<tr><td><code>gad <i>foo</i></code></td>  <td><code>git add <i>foo</i> ; git status</code></td></tr>"+
									"<tr><td><code>gbr</code></td>             <td><code>git branch</code></td></tr>"+
									"<tr><td><code>gbr <i>foo</i></code></td>  <td><code>git checkout <i>foo</i> ; git branch</code></td></tr>"+
									"<tr><td><code>gps</code></td>             <td><code>git push</code></td></tr>"+
									"<tr><td><code>gpf</code></td>             <td><code>git push -f</code></td></tr>"+
									"<tr><td><code>gpl</code></td>             <td><code>git pull</code></td></tr>"+
									"<tr><td><code>gls</code></td>             <td><code>git shortlog</code></td></tr>"+
									"<tr><td><code>glf</code></td>             <td><code>git log --stat</code></td></tr>"+
									"<tr><td><code>gdf</code></td>             <td><code>git diff</code></td></tr>"+
									"<tr><td><code>gdf <i>foo</i></code></td>  <td><code>git diff <i>foo</i></code></td></tr>"+
									"<tr><td><code>gco</code></td>             <td><code>git checkout</code></td></tr>"+
									"<tr><td><code>gci</code></td>             <td><code>git commit -m \"...\"</code></td></tr>"+
									"<tr><td><code>gci <i>foo</i></code></td>  <td><code>git commit -m \"<i>foo</i>\"</code></td></tr>"+
									"<tr><td><code>grh</code></td>             <td><code>git reset HEAD</code></td></tr>"+
									"<tr><td><code>grh <i>1</i></code></td>    <td><code>git reset HEAD^</code></td></tr>"+
									"<tr><td><code>grh <i>2</i></code></td>    <td><code>git reset HEAD^^</code></td></tr>"+
								"</tbody>"+
								"</table>"+
							"</div>"
					}
				]
			}, {
				name: "carouselparallax",
				img: "http://mr21.fr/CarouselParallax/thumbnail.jpg",
				href: "http://mr21.fr/CarouselParallax/",
				title: {
					icon: "fa-html5",
					span: "CarouselParallax"
				},
				appLink: {
					en: "Scroll the paralax&nbsp;!",
					fr: "Faire défiler le parallax&nbsp;!"
				},
				tags: [
					{ name: "javascript", title: "JavaScript" },
					{ name: "css3",       title: "CSS3" },
					{ name: "photoshop",  title: "Photoshop" }
				],
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "How does it work&nbsp;?",
							fr: "Comment ça marche&nbsp;?"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" To make its <b>paralax</b>, the script use the CSS property"+
									" <code>z-index</code> to calculate the more or less faster"+
									" move of the elements during the changement of the slide."+
									" This has the effect of giving <b>an impression of depth</b>."+
								"</span>"+
								"<span lang='fr'>"+
									" Pour faire son <b>parallax</b>, le script utilise la propriété"+
									" CSS <code>z-index</code> pour calculer les déplacements"+
									" plus ou moins rapide des éléments lors du changement de slide."+
									" Ce qui a pour effet de donner <b>une impression de profondeur</b>."+
								"</span>"+
							"</p>"
					}
				]
			}
		]
	}, {
		rub: "skills",
		data: [
			{
				name: "javascript",
				img: "logos/javascript.png",
				title: {
					span: "JavaScript"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" JavaScript is a lightweight, interpreted, object-oriented language"+
									" with first-class functions, most known as the scripting language"+
									" for Web pages, but used in many non-browser environments as well"+
									" such as node.js or Apache CouchDB. It is a prototype-based,"+
									" multi-paradigm scripting language that is dynamic, and supports"+
									" object-oriented, imperative, and functional programming styles. "+
								"</span>"+
								"<span lang='fr'>"+
									" JavaScript est un langage de script léger, orienté objet,"+
									" principalement connu comme le langage de script des pages web."+
									" Mais il est aussi utilisé dans de nombreux environnements extérieurs"+
									" aux navigateurs web tels que node.js ou Apache CouchDB. C'est un"+
									" langage à objets utilisant le concept de prototype, disposant d'un"+
									" typage faible et dynamique qui permet de programmer suivant plusieurs"+
									" paradigmes de programmation&nbsp;: fonctionnelle, impérative et orientée objet. "+
								"</span>"+
								"<span class='sourceLink'>"+
									"<a lang='en' target='_blank' href='https://developer.mozilla.org/en/docs/Web/JavaScript'>mozilla.org</a>"+
									"<a lang='fr' target='_blank' href='https://developer.mozilla.org/fr/docs/Web/JavaScript'>mozilla.org</a>"+
								"</span>."+
							"</p>"
					}
				]
			}, {
				name: "jquery",
				img: "logos/jquery.png",
				title: {
					span: "jQuery"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" <b>jQuery</b> is a fast, small, and feature-rich <b>JavaScript"+
									" library</b>. It makes things like HTML document traversal and"+
									" manipulation, event handling, animation, and Ajax much simpler"+
									" with an easy-to-use API that works across a multitude of browsers."+
									" With a combination of versatility and extensibility, jQuery has"+
									" changed the way that millions of people write JavaScript. "+
								"</span>"+
								"<span lang='fr'>"+
									" <b>jQuery</b> est une <b>bibliothèque JavaScript</b> rapide,"+
									" petite et riche en fonctionnalités. Elle rend le parcours et"+
									" la manipulation du DOM ainsi que la gestion des événements,"+
									" les animations et l'Ajax beaucoup plus simple avec une API"+
									" facile à utiliser à travers tous les navigateurs différents."+
									" Avec une combinaison de polyvalence et d'extensibilité, jQuery"+
									" a changé la façon dont des millions de personnes écrivent le"+
									" JavaScript. "+
								"</span>"+
								"<span class='sourceLink'>"+
									"<a target='_blank' href='http://jquery.com/'>jquery.com</a>"+
								"</span>."+
							"</p>"
					}
				]
			}, {
				name: "html5",
				img: "logos/html5.png",
				title: {
					icon: "fa-html5",
					span: "HTML5"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" <b>HTML5</b> is the latest evolution of the standard that defines HTML."+
									" The term represents two different concepts&nbsp;:"+
									" It's a new version of the language HTML, with new elements, attributes,"+
									" and behaviors, and a <b>larger set of technologies</b> that allows more diverse"+
									" and powerful Web sites and applications. "+
								"</span>"+
								"<span lang='fr'>"+
									" <b>HTML5</b> est la dernière évolution des standards qui définissent HTML."+
									" Le terme HTML5 regroupe deux concepts différents&nbsp;:"+
									" Il s'agit de la nouvelle version du langage HTML, avec de nouveaux éléments,"+
									" attributs et comportements&nbsp;; mais aussi un <b>ensemble plus large de technologies</b>"+
									" qui permettent des sites web plus variés et puissants, et des applications web. "+
								"</span>"+
								"<span class='sourceLink'>"+
									"<a lang='en' target='_blank' href='https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5'>mozilla.org</a>"+
									"<a lang='fr' target='_blank' href='https://developer.mozilla.org/fr/docs/Web/Guide/HTML/HTML5'>mozilla.org</a>"+
								"</span>."+
							"</p>"
					}
				]
			}, {
				name: "css3",
				img: "logos/css3.png",
				title: {
					icon: "fa-css3",
					span: "CSS3"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" <b>CSS3</b> is the latest evolution of the CSS language and aims at"+
									" extending CSS2.1. It brings a lot of long-awaited novelties, like"+
									" rounded corners, shadows, gradients, <b>transitions or animations</b>,"+
									" as well as new layouts like multi-columns, flexible box or grid layouts. "+
								"</span>"+
								"<span lang='fr'>"+
									" <b>CSS3</b> est la dernière évolution du langage CSS et vise à"+
									" étendre CSS2.1. Il apporte beaucoup de nouveautés attendues, comme"+
									" les angles arrondis, les ombres, les dégradés, les <b>transitions ou"+
									" animations</b>, aussi bien que de nouvelles mise en page comme le"+
									" multi-colonnes, les boîtes flexibles ou les mises en pages en grille. "+
								"</span>"+
								"<span class='sourceLink'>"+
									"<a lang='en' target='_blank' href='https://developer.mozilla.org/en/docs/Web/CSS/CSS3'>mozilla.org</a>"+
									"<a lang='fr' target='_blank' href='https://developer.mozilla.org/fr/docs/Web/CSS/CSS3'>mozilla.org</a>"+
								"</span>."+
							"</p>"
					}
				]
			}, {
				name: "sass",
				img: "logos/sass.png",
				title: {
					icon: "fa-css3",
					span: "Sass"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p></p>"
					}
				]
			}, {
				name: "mysql",
				img: "logos/mysql.png",
				title: {
					icon: "fa-database",
					span: "MySQL"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p></p>"
					}
				]
			}, {
				name: "php",
				img: "logos/php.png",
				title: {
					span: "PHP"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p></p>"
					}
				]
			}, {
				name: "git",
				img: "logos/git.png",
				title: {
					icon: "fa-git-square",
					span: "git"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p></p>"
					}
				]
			}, {
				name: "linux",
				img: "logos/linux.png",
				title: {
					icon: "fa-linux",
					span: "Linux"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p></p>"
					}
				]
			}, {
				name: "bash",
				img: "logos/bash.png",
				title: {
					icon: "fa-terminal",
					span: "Bash"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p></p>"
					}
				]
			}, {
				name: "cplusplus",
				img: "logos/c++.png",
				title: {
					span: "C++"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p></p>"
					}
				]
			}, {
				name: "c",
				img: "logos/c.png",
				title: {
					span: "C"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p></p>"
					}
				]
			}, {
				name: "photoshop",
				img: "logos/photoshop.png",
				title: {
					icon: "fa-picture-o",
					span: "Photoshop"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" <b>Photoshop</b> is an editing software, processing and computer"+
									" aided drafting. It is mainly used for processing digital photographs,"+
									" but also serves to create images from scratch. It works"+
									" essentially on raster images because the images are composed of"+
									" a grid of pixels. The advantage of these images is to reproduce"+
									" subtle gradations of color. "+
								"</span>"+
								"<span lang='fr'>"+
									" <b>Photoshop</b> est un logiciel de retouche, de traitement et"+
									" de dessin assisté par ordinateur. Il est principalement utilisé"+
									" pour le traitement de photographies numériques, mais sert"+
									" également à la création d’images à partir de rien. Il travaille"+
									" essentiellement sur images matricielles car les images sont"+
									" constituées d’une grille de pixels. L’intérêt de ces images est"+
									" de reproduire des graduations subtiles de couleurs. "+
								"</span>"+
								"<span class='sourceLink'>"+
									"<a lang='en' target='_blank' href='http://en.wikipedia.org/wiki/Adobe_Photoshop'>wikipedia.org</a>"+
									"<a lang='fr' target='_blank' href='http://fr.wikipedia.org/wiki/Adobe_Photoshop'>wikipedia.org</a>"+
								"</span>."+
							"</p>"
					}
				]
			}, {
				name: "illustrator",
				img: "logos/illustrator.png",
				title: {
					span: "Illustrator"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p></p>"
					}
				]
			}, {
				name: "indesign",
				img: "logos/indesign.png",
				title: {
					icon: "fa-file-pdf-o",
					span: "InDesign"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p>"+
								"<span lang='en'>"+
									" InDesign is a desktop publishing software application."+
									" It can be used to create works such as posters, flyers,"+
									" brochures, magazines, newspapers and books."+
								"</span>"+
								"<span lang='fr'>"+
									" InDesign est un logiciel d'application d'édition. Il peut"+
									" être utilisé pour créer des œuvres telles que des affiches,"+
									" dépliants, brochures, magazines, journaux ou livres."+
								"</span>"+
							"</p>"
					}
				]
			}
		]
	}
];

/*
			}, {
				name: "xxxxxxx",
				img: "xxxxxxx",
				title: {
					icon: "fa-xxxxxxx",
					span: "xxxxxxx"
				},
				subRub: [
					{
						title: {
							icon: "fa-info-circle",
							en: "About",
							fr: "À propos"
						},
						content:
							"<p></p>"
					}
				]
			}


			}, {
				name: "xxxxxxx",
				img: "xxxxxxx",
				href: "xxxxxxx",
				title: {
					icon: "fa-xxxxxxx",
					span: "xxxxxxx"
				},
				appLink: {
					en: "xxxxxxx",
					fr: "xxxxxxx"
				},
				tags: [
					{ name: "xxxxxxx", title: "xxxxxxx" },
				],
				subRub: [
					{
						title: {
							icon: "fa-xxxxxxx",
							en: "xxxxxxx",
							fr: "xxxxxxx"
						},
						content:

					}, {
						title: {
							icon: "fa-xxxxxxx",
							en: "xxxxxxx",
							fr: "xxxxxxx"
						},
						content:

					}
				]
			}
*/