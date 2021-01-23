const quiz = [
  {
    question: '問題１：' + 'SaaSはどれ？',
    answers: [ 'ハードだけ提供', 'ハード・OSまで提供', '全部提供してくれる', 'セキュリティ対策は自分で行う必要がある'],
    correct: '全部提供してくれる'
  }, {
    question: '問題２：' + '社内に設置されたWebサーバと、AWSで構築したWebサーバでは、一般的にどっちがセキュリティが高い？',
    answers: [ '社内のサーバ', 'AWS上のサーバ', '変わらない', 'その他'],
    correct: '社内のサーバ'
  }, {
    question: '問題３：' + '不審な社内LANの通信を早期発見して対策したい場合、どの製品がオススメ？',
    answers: [ 'Trend Micro Virtual Patch for Endpoint', 'Deep Discovery Inspector', 'Apex One Endpoint Sensor', 'Trend Micro Deep Security'],
    correct: 'Deep Discovery Inspector'
  }, {
    question: '問題４：' + 'Trend Micro Portable Security3の特徴はどれか？',
    answers: [ 'エンドポイント対策製品', '脆弱性対策製品', 'USB型ウイルス対策製品', 'ロックダウン型製品'],
    correct: 'USB型ウイルス対策製品'
  }, {
    question: '問題５：' + 'クラウド型サービスではないものはどれ？',
    answers: [ 'SaaS', 'IaaS', 'PaaS', 'BaaS'],
    correct: 'BaaS'
  }, {
    question: '問題６：' + '電話中にお客様より意味のわからない単語を耳にした、一番好ましくない対応はどれか？',
    answers: [ 'メモを取りお調べいたしますと保留', '〇〇ってどのようなものですか？と聞いてみた', '無視してとりあえず会話を続ける', '電話中にググってみた'],
    correct: '無視してとりあえず会話を続ける'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}