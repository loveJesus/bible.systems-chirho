<!-- For God so loved the world, that He gave His only begotten Son,
     that all who believe in Him should not perish but have everlasting life. — John 3:16 -->

<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-slate-950 text-white">
	<header class="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<a href="/" class="flex items-center gap-3">
					<div class="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
						<span class="text-2xl">📖</span>
					</div>
					<span class="text-xl font-bold text-gradient-gold">Bible.Systems</span>
				</a>
				<div class="flex items-center gap-6">
					<a href="https://stack.faith" class="text-slate-400 hover:text-amber-400 text-sm">FaithStack</a>
				</div>
			</div>
		</nav>
	</header>

	<main class="pt-16">
		{@render children()}
	</main>

	<footer class="bg-slate-900 border-t border-slate-800 py-8 text-center">
		<p class="text-amber-400 font-semibold mb-2">JESUS CHRIST IS LORD</p>
		<p class="text-slate-500 text-sm">Part of <a href="https://stack.faith" class="text-amber-400 hover:underline">FaithStack</a></p>
	</footer>
</div>
