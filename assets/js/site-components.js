(function (global) {
	'use strict';

	function escapeHtml(value) {
		return String(value)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');
	}

	function replaceComponents(name, markup) {
		document.querySelectorAll('[data-site-component="' + name + '"]').forEach(function (node) {
			node.outerHTML = markup;
		});
	}

	function resolveLegacyPageKey() {
		var path = window.location.pathname.split('/').pop() || 'index.html';
		if (path === 'about.html') return 'about';
		if (path === 'research.html') return 'research';
		if (path === 'publications.html') return 'publications';
		return 'home';
	}

	function renderLegacyHeader(currentPage) {
		var navItems = [
			{ key: 'home', href: 'index.html', label: 'Home' },
			{ key: 'about', href: 'about.html', label: 'About' },
			{ key: 'research', href: 'research.html', label: 'Research' },
			{ key: 'publications', href: 'publications.html', label: 'Publications' }
		];

		var links = navItems.map(function (item) {
			var activeClass = item.key === currentPage ? ' class="active"' : '';
			return '<li' + activeClass + '><a href="' + item.href + '">' + item.label + '</a></li>';
		}).join('');

		return [
			'<header id="header">',
			'	<a href="index.html" class="logo">Evelyn Marshall Astrophysics</a>',
			'</header>',
			'<nav id="nav">',
			'	<ul class="links">' + links + '</ul>',
			'	<ul class="icons">',
				'<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>',
				'<li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>',
				'<li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>',
			'</ul>',
			'</nav>'
		].join('');
	}

	function renderLegacyFooter(scopeLabel) {
		var safeScopeLabel = escapeHtml(scopeLabel || 'Exoplanet Atmospheres, Spectroscopy, and Bayesian Inference');
		return [
			'<footer id="footer">',
			'	<div class="site-footer__grid">',
				'<section>',
					'<h3>ORCID</h3>',
					'<p><a href="https://orcid.org/0000-0002-7834-5621" target="_blank" rel="noopener noreferrer">0000-0002-7834-5621</a></p>',
				'</section>',
				'<section>',
					'<h3>Email</h3>',
					'<p><a href="mailto:e.marshall@uq.edu.au">e.marshall@uq.edu.au</a></p>',
				'</section>',
				'<section>',
					'<h3>Affiliation</h3>',
					'<p>School of Earth and Space Sciences, The University of Queensland</p>',
				'</section>',
				'<section>',
					'<h3>Scope</h3>',
					'<p>' + safeScopeLabel + '</p>',
				'</section>',
			'</div>',
			'</footer>',
			'<div id="copyright">',
			'	<ul><li>&copy; Dr. Evelyn Marshall (Fictional Template)</li><li>The University of Queensland</li></ul>',
			'</div>'
		].join('');
	}

	function renderModernHeader() {
		var navItems = [
			{ href: '#about', label: 'About' },
			{ href: '#research', label: 'Research' },
			{ href: '#publications', label: 'Publications' },
			{ href: '#teaching', label: 'Teaching' },
			{ href: '#contact', label: 'Contact' }
		];

		var desktopLinks = navItems.map(function (item) {
			return '<li><a href="' + item.href + '" class="transition hover:text-astroAccent">' + item.label + '</a></li>';
		}).join('');

		var mobileLinks = navItems.map(function (item) {
			return '<li><a href="' + item.href + '" class="block rounded-lg px-3 py-2 transition hover:bg-astroAccentSoft/70 hover:text-astroText">' + item.label + '</a></li>';
		}).join('');

		return [
			'<header class="sticky top-0 z-50 border-b border-astroBorder/70 bg-astroBg/80 backdrop-blur-xl">',
			'	<nav class="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10" aria-label="Main navigation">',
				'<a href="#top" class="font-serif text-lg font-black tracking-tight text-astroText">Dr. Evelyn Marshall</a>',
				'<div class="flex items-center gap-3">',
					'<button id="theme-toggle" class="inline-flex items-center gap-2 rounded-lg border border-astroBorder bg-astroSurfaceSoft px-3 py-2 text-sm font-semibold text-astroText transition hover:border-astroAccent/60 hover:text-astroAccent" aria-label="Toggle theme" aria-pressed="false">',
						'<i id="theme-icon-moon" data-lucide="moon-star" class="h-4 w-4"></i>',
						'<i id="theme-icon-sun" data-lucide="sun" class="hidden h-4 w-4"></i>',
						'<span id="theme-label" class="hidden sm:inline">Light</span>',
					'</button>',
					'<button id="menu-button" class="inline-flex items-center justify-center rounded-lg border border-astroBorder p-2 text-astroMuted md:hidden" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu">',
						'<i data-lucide="menu" class="h-5 w-5"></i>',
					'</button>',
				'</div>',
				'<ul class="hidden items-center gap-8 text-sm font-medium text-astroMuted md:flex">' + desktopLinks + '</ul>',
			'</nav>',
			'<div id="mobile-menu" class="hidden border-t border-astroBorder bg-astroSurface md:hidden">',
			'	<ul class="space-y-1 px-6 py-4 text-sm font-medium text-astroMuted">' + mobileLinks + '</ul>',
			'</div>',
			'</header>'
		].join('');
	}

	function renderModernFooter() {
		return [
			'<footer id="contact" class="border-t border-astroBorder bg-astroSurface/70">',
			'	<div class="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 lg:grid-cols-3 lg:px-10">',
				'<div>',
					'<h2 class="font-serif text-2xl font-bold text-astroText">Contact</h2>',
					'<p class="mt-4 text-sm text-astroMuted">Email: <a href="mailto:e.marshall@uq.edu.au" class="font-semibold text-astroAccent">e.marshall@uq.edu.au</a></p>',
					'<p class="mt-2 text-sm text-astroMuted">Office: Room 220, Parnell Building, St Lucia Campus, The University of Queensland</p>',
				'</div>',
				'<div class="lg:col-span-2">',
					'<h3 class="font-serif text-xl font-bold text-astroText">Academic Profiles</h3>',
					'<div class="mt-4 flex flex-wrap gap-3">',
						'<a href="https://scholar.google.com/citations?user=uq-astro-template" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-astroBorder px-4 py-2 text-sm font-medium text-astroMuted transition hover:bg-astroAccentSoft/60 hover:text-astroText"><i data-lucide="book-open-check" class="h-4 w-4"></i>Google Scholar</a>',
						'<a href="https://orcid.org/0000-0002-7834-5621" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-astroBorder px-4 py-2 text-sm font-medium text-astroMuted transition hover:bg-astroAccentSoft/60 hover:text-astroText"><i data-lucide="badge-check" class="h-4 w-4"></i>ORCID</a>',
						'<a href="https://www.linkedin.com/in/evelyn-marshall-astro-template" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-astroBorder px-4 py-2 text-sm font-medium text-astroMuted transition hover:bg-astroAccentSoft/60 hover:text-astroText"><i data-lucide="linkedin" class="h-4 w-4"></i>LinkedIn</a>',
						'<a href="https://x.com/marshall_astro_uq" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-astroBorder px-4 py-2 text-sm font-medium text-astroMuted transition hover:bg-astroAccentSoft/60 hover:text-astroText"><i data-lucide="twitter" class="h-4 w-4"></i>Twitter/X</a>',
						'<a href="https://github.com/marshall-exoplanet" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-astroBorder px-4 py-2 text-sm font-medium text-astroMuted transition hover:bg-astroAccentSoft/60 hover:text-astroText"><i data-lucide="github" class="h-4 w-4"></i>GitHub</a>',
					'</div>',
				'</div>',
			'</div>',
			'<div class="border-t border-astroBorder py-5 text-center text-sm text-astroMuted">',
			'	&copy; <span id="year"></span> Dr. Evelyn Marshall (Fictional Template).',
			'</div>',
			'</footer>'
		].join('');
	}

	function mount(options) {
		var config = options || {};
		replaceComponents('modern-header', renderModernHeader());
		replaceComponents('modern-footer', renderModernFooter());
		replaceComponents('legacy-header', renderLegacyHeader(config.currentPage || resolveLegacyPageKey()));
		replaceComponents('legacy-footer', renderLegacyFooter(config.legacyFooterScope));
	}

	global.SiteComponents = {
		mount: mount
	};
})(window);
