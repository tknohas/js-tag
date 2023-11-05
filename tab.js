// 即時関数、グローバル変数の汚染を防ぐ
(()=>{ 

  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'is-active';
  const navLen = $nav.length;
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  const handleClick = (e) => {
    e.preventDefault();
    
    //clickされたnavとdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;//data属性を取得
    
    let index = 0;
    while(index < navLen){
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  };

  //nav要素に関数を適用
  let index = 0;
  while(index < navLen){
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
  };

  
})();
