import "material-design-lite";

// 指定のIDのarticleまで移動する & ナビゲータを更新
const selectNavigator = (id: string) => {
	Array.prototype.forEach.call(document.querySelectorAll("nav a.is-active"), (a: Element) => {
		a.classList.remove("is-active");
	});
	Array.prototype.forEach.call(document.querySelectorAll("nav a[href=\""+id+"\"]"), (a: Element) => {
		a.classList.add("is-active");
	});
	location.hash = id;
};

// ナビゲータをクリックしたときのイベントハンドリング
Array.prototype.forEach.call(document.querySelectorAll("nav a"), (a: Element) => {
	a.addEventListener("click", () => {
		selectNavigator(a.getAttribute("href"));
	});
});

// スクロールしたときにナビゲータを更新する(ナビゲータをクリックしたときも発火する)
const scroller = document.querySelector("main") as HTMLElement;
scroller.addEventListener("scroll", (evt: Event) => {
	const scrollTop = (evt.target as Element).scrollTop;

	let id = "#top";
	Array.prototype.forEach.call(document.querySelectorAll("article"), (a: HTMLElement) => {
		if(scrollTop > a.offsetTop - 10) { id = "#"+a.id; }
	});

	if(id !== location.hash) {
		Array.prototype.forEach.call(document.querySelectorAll("nav a.is-active"), (a: Element) => {
			a.classList.remove("is-active");
		});
		Array.prototype.forEach.call(document.querySelectorAll("nav a[href=\""+id+"\"]"), (a: Element) => {
			a.classList.add("is-active");
		});

		const url = location.hash.length > 0 ?
			location.href.replace(/#.*$/, id) : location.href + id;

		history.replaceState(null, "EMO-CHO introduction", url);
	}
});

// 初回読み込み時のナビゲータをちゃんとする
if(location.hash.length > 0) {
	selectNavigator(location.hash);
}
