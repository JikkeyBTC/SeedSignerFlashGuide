// JikKey SeedSigner Guide — 한국어(원문) / English / 日本語
// 한국어는 HTML 원문을 그대로 쓰고, 여기에는 영어·일본어만 둡니다.
// 문구를 고칠 때는 같은 키의 en·ja 값을 함께 바꾸세요.
(() => {
  const V = (name) => `<code class="file" data-version-text="${name.replace('0.8.7', '{v}')}">${name}</code>`;
  const IMG = 'seedsigner_os.0.8.7.pi0.img';
  const SHA = 'seedsigner.0.8.7.sha256.txt';

  const DICT = {
    en: {
      /* common */
      'c.skip': 'Skip to content',
      'c.home_aria': 'JikKey install guide home',
      'c.nav_aria': 'Guides',
      'c.nav_install': 'Install guide',
      'c.nav_verify': 'Verify',
      'c.lang_aria': 'Language',
      'c.meta_time': 'About 10 min',
      'c.footer_tag': 'Your keys, guarded by you.',
      'c.lightbox': 'Enlarged image',
      'c.copy': 'Copy',
      'c.copied': 'Copied',
      'c.copy_fail': 'Copy failed',
      'c.zoom': 'view larger',

      /* index.html */
      'i.title': 'SeedSigner OS Install Guide · JikKey',
      'i.desc': 'How to install SeedSigner OS on your JikKey SeedSigner with a microSD card. About 10 minutes with Raspberry Pi Imager.',
      'i.hero_eyebrow': 'Install SeedSigner OS',
      'i.hero_h1': 'One microSD card<br />brings your SeedSigner to life.',
      'i.hero_tagline': 'Five steps, about 10 minutes. <span>All you need is a PC.</span>',
      'i.cta_start': 'Start installing',
      'i.cta_verify': 'Verify the image',
      'i.kit_eyebrow': 'Before you start',
      'i.kit_h2': 'You’ll need three things.',
      'i.kit1_b': 'SeedSigner',
      'i.kit1_s': 'JikKey SeedSigner unit (Raspberry Pi Zero 1.3)',
      'i.kit2_b': 'microSD card',
      'i.kit2_s': 'The card included in the package. Anything on it will be erased.',
      'i.kit3_b': 'USB card reader',
      'i.kit3_s': 'The included reader, plugged into a USB port on your PC.',
      'i.rail_p': 'Install steps',
      'i.rail1': '<span>01</span>Prepare the microSD',
      'i.rail2': '<span>02</span>Download the OS image',
      'i.rail3': '<span>03</span>Install Imager',
      'i.rail4': '<span>04</span>Write to microSD',
      'i.rail5': '<span>05</span>Check it boots',
      'i.rail6': '<span>!</span>Caution',
      'i.s1_h2': 'Prepare the microSD card',
      'i.s1_lead': 'Push the microSD card <b>all the way</b> into the included USB card reader.',
      'i.s1a_h3': 'Check which way it goes in.',
      'i.s1a_desc': 'Insert it with the gold contacts facing into the reader. The photos show the card only partly inserted so you can see the direction — push it in fully.',
      'i.s1a_alt1': 'Inserting a microSD card into a black reader',
      'i.s1a_alt2': 'Inserting a microSD card into a silver reader',
      'i.s1a_alt3': 'Inserting a microSD card into a strap-style reader',
      'i.s1a_alt4': 'Inserting a microSD card into a white reader',
      'i.s1a_note': 'The reader may look different depending on your package.',
      'i.s1b_h3': 'Plug the reader into your PC.',
      'i.s1b_desc': 'It shows up as a removable drive. If a window asks you to format it, just close it.',
      'i.s2_h2': 'Download the SeedSigner OS image',
      'i.s2_lead': 'On your PC, download the latest OS image from SeedSigner’s official GitHub.',
      'i.s2a_h3': 'Open the official download table.',
      'i.s2a_alt': 'Raspberry Pi Zero 1.3 row in the SeedSigner GitHub download table',
      'i.s2b_h3': 'Download the file in the <b>Raspberry Pi Zero 1.3</b> row.',
      'i.s2b_desc': 'It’s the first row — the file name ends in <code class="file">.pi0.img</code>. A file for any other board won’t boot.',
      'i.s2c_h3': 'Verify it if you like. <span class="eyebrow opt">Optional</span>',
      'i.s2c_desc': 'A signature and a hash let you confirm the image hasn’t been tampered with. Recommended — this is a Bitcoin wallet, after all.',
      'i.card_b': 'Image verification guide',
      'i.card_s': 'GPG signature and SHA256 hash · for Windows',
      'i.s3_h2': 'Install Raspberry Pi Imager',
      'i.s3_lead': 'The official Raspberry Pi tool that writes the OS image to your microSD card.',
      'i.s3a_h3': 'Download the installer for your OS.',
      'i.s3a_desc': ' — click the button for your PC: Windows, macOS or Ubuntu.',
      'i.s3a_alt': 'Download for Windows button on the Raspberry Pi software page',
      'i.s3b_h3': 'Run the installer.',
      'i.s3b_desc': 'Pick a setup language, then click <span class="ui">OK</span> <span class="ui">Next</span> as prompted.',
      'i.s3b_alt': 'Setup language window',
      'i.s4_h2': 'Write to the microSD card',
      'i.s4_lead': 'Open Raspberry Pi Imager, choose <b>Device → OS → Storage</b> in that order, then write.',
      'i.s4_uinote': 'These screenshots show Imager in Korean. The layout and button positions are the same — your Imager shows the labels in your PC’s language.',
      'i.s4a_h3': 'Device: choose <b>Raspberry Pi Zero</b>.',
      'i.s4a_desc': 'Scroll down the list, select <b>Raspberry Pi Zero</b>, and click <span class="ui">Next</span>.',
      'i.s4a_alt': 'Raspberry Pi Zero selected in the Device step',
      'i.s4b_h3': 'OS: choose <b>Use custom</b>.',
      'i.s4b_desc': 'Click <b>Use custom</b> at the very bottom of the list.',
      'i.s4b_alt': 'Use custom selected in the OS step',
      'i.s4c_h3': 'Open the image file you downloaded.',
      'i.s4c_desc': `Select the ${V(IMG)} file from step 2 and click <span class="ui">Open</span>.`,
      'i.s4c_alt': 'Selecting the pi0.img file in the file picker',
      'i.s4d_h3': 'Storage: choose the microSD card.',
      'i.s4d_desc': 'Select <b>Mass Storage Device USB Device</b> — its size should match your microSD card — and click <span class="ui">Next</span>.',
      'i.s4d_alt': 'USB storage device selected in the Storage step',
      'i.s4d_warn': 'If you pick your PC’s hard drive (hundreds of GB to TB), that drive will be erased. <b>Always check the size.</b>',
      'i.s4e_h3': 'Check the summary and click <span class="ui">WRITE</span>.',
      'i.s4e_desc': 'Make sure Device is Raspberry Pi Zero and Operating system is the <code class="file">.pi0.img</code> file.',
      'i.s4e_alt': 'Write image summary with the WRITE button',
      'i.s4f_h3': 'Confirm the erase prompt.',
      'i.s4f_desc': 'Imager warns that everything on the card will be erased. Click <span class="ui">I UNDERSTAND, ERASE AND WRITE</span>.',
      'i.s4f_alt': 'Erase confirmation dialog',
      'i.s4g_h3': 'When you see <b>Write complete!</b>, you’re done.',
      'i.s4g_desc': 'The card is ejected automatically. Unplug the reader and take out the microSD card.',
      'i.s4g_alt': 'Write complete screen',
      'i.s5_h2': 'Check that it boots',
      'i.s5_lead': 'Insert the microSD card into the slot on the side of the SeedSigner and connect power. When the SeedSigner logo is followed by the main screen, the install is complete.',
      'i.s5_alt': 'microSD card inserted in the side slot of the SeedSigner',
      'i.s5_video': 'SeedSigner booting up',
      'i.c_eyebrow': 'Caution',
      'i.c_h2': 'Don’t use a fast charger.',
      'i.c_p': 'A fast charger can damage your SeedSigner. Power it from a <b>regular 5V USB charger or a USB port on your PC</b>.',

      /* verify.html */
      'v.title': 'Verify the SeedSigner Image · JikKey',
      'v.desc': 'Check that your SeedSigner OS image hasn’t been tampered with, using a GPG signature and a SHA256 hash (Windows).',
      'v.hero_eyebrow': 'Image verification · Optional',
      'v.hero_h1': 'Check for yourself<br />that your download is genuine.',
      'v.hero_tagline': 'One signature, one hash. <span>Don’t trust, verify.</span>',
      'v.meta_os': 'For Windows',
      'v.meta_link': 'Official guide for macOS · Linux',
      'v.ver_label': 'Version to verify',
      'v.ver_help': 'File names and commands below follow the version you enter. Screenshots show 0.8.6.',
      'v.why_eyebrow': 'Why verify?',
      'v.why_h2': 'You’re checking two things.',
      'v.why1_idx': 'Signature',
      'v.why1_b': 'Was it made by the SeedSigner team?',
      'v.why1_s': 'The GPG signature confirms who wrote the hash list.',
      'v.why2_idx': 'Hash',
      'v.why2_b': 'Did it change on the way?',
      'v.why2_s': 'The image’s SHA256 hash must match the list character for character.',
      'v.rail_p': 'Verification steps',
      'v.rail1': '<span>01</span>Get three files',
      'v.rail2': '<span>02</span>Install Gpg4win',
      'v.rail3': '<span>03</span>Check the signature',
      'v.rail4': '<span>04</span>Compare hashes',
      'v.rail5': '<span>✓</span>Done',
      'v.s1_h2': 'Download three files into one folder.',
      'v.s1_lead': 'Along with the image, you need the hash list and its signature file.',
      'v.s1_uinote': 'Screenshots were taken on a Korean-language Windows PC. The steps are the same in any language.',
      'v.s1a_h3': 'Get them from SeedSigner’s GitHub.',
      'v.s1a_desc': ' — get the Pi Zero 1.3 image from the table, then the two files under <b>Also download these 2 signature verification files</b>.',
      'v.s1a_alt': 'The download table and where the two signature verification files are',
      'v.dt_img': 'OS image',
      'v.dt_hash': 'Hash list',
      'v.dt_sig': 'Signature',
      'v.s1b_h3': 'Keep all three in the same folder.',
      'v.s1b_desc': 'If you gather them in a <code class="file">Downloads\\verify</code> folder like this, you can use the commands below as they are.',
      'v.s1b_alt': 'The three files in the verify folder',
      'v.s2_h2': 'Install Gpg4win',
      'v.s2_lead': 'GPG (GNU Privacy Guard) is a free, open-source tool for checking digital signatures. Gpg4win is its Windows edition.',
      'v.s2a_h3': 'Find Gpg4win on the GnuPG download page.',
      'v.s2a_desc': ' — scroll down and click <b>Gpg4win</b> in the <b>GnuPG binary releases</b> table.',
      'v.s2a_alt': 'Gpg4win link in the GnuPG binary releases table',
      'v.s2b_h3': 'Click <span class="ui">Download</span>.',
      'v.s2b_alt': 'Gpg4win download button',
      'v.s2c_h3': 'Run the installer you downloaded.',
      'v.s2c_desc': 'The default options are fine.',
      'v.s2c_alt': 'Gpg4win download in progress',
      'v.s3_h2': 'Check the signature',
      'v.s3_lead': 'In PowerShell, fetch SeedSigner’s public key and check the signature on the hash list.',
      'v.s3a_h3': 'Open PowerShell.',
      'v.s3a_desc': 'Search for <b>PowerShell</b> in the Start menu and run it.',
      'v.s3a_alt': 'Searching for PowerShell in the Start menu',
      'v.s3b_h3': 'Go to the folder with your files.',
      'v.s3b_desc': 'If you saved them somewhere else, use that path instead.',
      'v.s3c_h3': 'Import SeedSigner’s public key.',
      'v.s3c_alt': 'Result of importing the public key',
      'v.s3d_h3': 'Check the signature.',
      'v.s3d_alt': 'gpg verify output showing Good signature and the fingerprint',
      'v.s3e_h3': 'Check two things in the output.',
      'v.dt_sigres': 'Signature result',
      'v.dt_fp': 'Last 16 digits of the key fingerprint',
      'v.dd_fp': '<code>C7EF 7090 0726 0119</code> — must match Keybase',
      'v.s3e_desc': ' — compare the key shown there with the end of the <b>Primary key fingerprint</b> in your terminal.',
      'v.s3e_alt': 'SeedSigner’s key fingerprint on Keybase',
      'v.s3e_note': '<b>WARNING: This key is not certified with a trusted signature!</b> is normal. It only means your PC hasn’t marked this key as “trusted” — comparing the fingerprint with Keybase takes care of that. If you see <b>BAD signature</b>, delete the files and download them again.',
      'v.s4_h2': 'Compare hashes',
      'v.s4_lead': 'Check that your image’s hash matches the hash list you just verified.',
      'v.s4a_h3': 'Calculate the image’s SHA256 hash.',
      'v.s4b_h3': 'Compare it with the hash list.',
      'v.s4b_desc': `Open ${V(SHA)} in Notepad and check that the value on the <code class="file">pi0.img</code> line matches the one you calculated — <b>every character</b>.`,
      'v.s4b_alt': 'Comparing the CertUtil output with the pi0.img line in sha256.txt',
      'v.done_h2': 'Verification complete.',
      'v.done_p': 'If both the signature and the hash check out, go ahead with the install.',
      'v.done_cta': 'Back to the install guide',
    },

    ja: {
      /* common */
      'c.skip': '本文へスキップ',
      'c.home_aria': 'JikKey インストールガイド ホーム',
      'c.nav_aria': 'ガイド',
      'c.nav_install': 'インストール',
      'c.nav_verify': '検証',
      'c.lang_aria': '言語',
      'c.meta_time': '約10分',
      'c.footer_tag': '自分の鍵は、自分で守る。',
      'c.lightbox': '拡大画像',
      'c.copy': 'コピー',
      'c.copied': 'コピーしました',
      'c.copy_fail': 'コピー失敗',
      'c.zoom': '拡大表示',

      /* index.html */
      'i.title': 'SeedSigner OS インストールガイド · JikKey',
      'i.desc': 'JikKey SeedSignerにmicroSDカードでSeedSigner OSをインストールする方法。Raspberry Pi Imagerで約10分です。',
      'i.hero_eyebrow': 'SeedSigner OS インストール',
      'i.hero_h1': '<span class="nb">microSDカード1枚で、</span><br /><span class="nb">SeedSignerが</span><span class="nb">目を覚ます。</span>',
      'i.hero_tagline': '<span class="nb">5ステップ、約10分。</span><span class="nb sub">PCがあれば大丈夫です。</span>',
      'i.cta_start': 'インストールを始める',
      'i.cta_verify': 'イメージを検証する',
      'i.kit_eyebrow': '始める前に',
      'i.kit_h2': '用意するものは3つです。',
      'i.kit1_b': 'SeedSigner',
      'i.kit1_s': 'JikKey SeedSigner 本体（Raspberry Pi Zero 1.3）',
      'i.kit2_b': 'microSDカード',
      'i.kit2_s': 'パッケージ同梱のカード。中のデータはすべて消去されます。',
      'i.kit3_b': 'USBカードリーダー',
      'i.kit3_s': '同梱のリーダーをPCのUSBポートに接続します。',
      'i.rail_p': 'インストール手順',
      'i.rail1': '<span>01</span>microSDの準備',
      'i.rail2': '<span>02</span>OSイメージの入手',
      'i.rail3': '<span>03</span>Imagerのインストール',
      'i.rail4': '<span>04</span>microSDへ書き込み',
      'i.rail5': '<span>05</span>起動確認',
      'i.rail6': '<span>!</span>注意事項',
      'i.s1_h2': 'microSDカードの準備',
      'i.s1_lead': '同梱のUSBカードリーダーにmicroSDカードを<b>奥まで</b>差し込みます。',
      'i.s1a_h3': '差し込む向きを確認します。',
      'i.s1a_desc': '金色の端子がリーダーの内側を向くように差し込みます。写真は向きが分かるよう途中まで差した状態です。実際は奥まで差し込んでください。',
      'i.s1a_alt1': '黒いリーダーにmicroSDカードを差し込む向き',
      'i.s1a_alt2': 'シルバーのリーダーにmicroSDカードを差し込む向き',
      'i.s1a_alt3': 'ストラップ付きリーダーにmicroSDカードを差し込む向き',
      'i.s1a_alt4': '白いリーダーにmicroSDカードを差し込む向き',
      'i.s1a_note': 'リーダーの形はパッケージによって異なる場合があります。',
      'i.s1b_h3': 'リーダーをPCに接続します。',
      'i.s1b_desc': 'PCのUSBポートに差すと、リムーバブルディスクとして認識されます。フォーマットを求める画面が出たら閉じてかまいません。',
      'i.s2_h2': '<span class="nb">SeedSigner OSイメージの</span><span class="nb">ダウンロード</span>',
      'i.s2_lead': 'PCでSeedSigner公式GitHubから最新のOSイメージをダウンロードします。',
      'i.s2a_h3': '公式のダウンロード表を開きます。',
      'i.s2a_alt': 'SeedSigner GitHubのダウンロード表にあるRaspberry Pi Zero 1.3の行',
      'i.s2b_h3': '<b>Raspberry Pi Zero 1.3</b>の行のファイルをダウンロードします。',
      'i.s2b_desc': '表の1行目、ファイル名が<code class="file">.pi0.img</code>で終わるファイルです。ほかのボード用のファイルでは起動しません。',
      'i.s2c_h3': '必要に応じて検証します。 <span class="eyebrow opt">任意</span>',
      'i.s2c_desc': 'ダウンロードしたイメージが改ざんされていないか、署名とハッシュで確認できます。ビットコインウォレットなので、検証をおすすめします。',
      'i.card_b': 'イメージ検証ガイド',
      'i.card_s': 'GPG署名とSHA256ハッシュの照合 · Windows向け',
      'i.s3_h2': '<span class="nb">Raspberry Pi Imagerの</span><span class="nb">インストール</span>',
      'i.s3_lead': 'microSDカードにOSイメージを書き込む、Raspberry Pi公式のソフトウェアです。',
      'i.s3a_h3': 'お使いのOS用のインストーラーをダウンロードします。',
      'i.s3a_desc': ' で、Windows・macOS・Ubuntuのうち、お使いのPCに合うボタンを押します。',
      'i.s3a_alt': 'Raspberry PiソフトウェアページのDownload for Windowsボタン',
      'i.s3b_h3': 'インストールを進めます。',
      'i.s3b_desc': 'セットアップ言語を選び、案内に従って <span class="ui">OK</span> <span class="ui">次へ</span> を押します。',
      'i.s3b_alt': 'セットアップ言語の選択画面',
      'i.s4_h2': '<span class="nb">microSDカードへの</span><span class="nb">書き込み</span>',
      'i.s4_lead': 'Raspberry Pi Imagerを起動し、<b>Device → OS → Storage</b> の順に選んで書き込みます。',
      'i.s4_uinote': 'スクリーンショットは韓国語表示のImagerです。画面構成とボタンの位置は同じで、実際の表示はPCの言語に合わせて切り替わります。',
      'i.s4a_h3': 'Device：<b>Raspberry Pi Zero</b>を選びます。',
      'i.s4a_desc': 'リストを下にスクロールして<b>Raspberry Pi Zero</b>を選び、<span class="ui">次へ</span>を押します。',
      'i.s4a_alt': 'DeviceステップでRaspberry Pi Zeroを選択',
      'i.s4b_h3': 'OS：<b>Use custom</b>を選びます。',
      'i.s4b_desc': 'リストのいちばん下にある<b>Use custom</b>（カスタムイメージ）を押します。',
      'i.s4b_alt': 'OSステップでUse customを選択',
      'i.s4c_h3': 'ダウンロードしたイメージファイルを開きます。',
      'i.s4c_desc': `手順2でダウンロードした${V(IMG)}を選び、<span class="ui">開く</span>を押します。`,
      'i.s4c_alt': 'ファイル選択画面でpi0.imgファイルを選択',
      'i.s4d_h3': 'Storage：microSDカードを選びます。',
      'i.s4d_desc': '容量がmicroSDカードと同じ<b>Mass Storage Device USB Device</b>を選び、<span class="ui">次へ</span>を押します。',
      'i.s4d_alt': 'StorageステップでUSBストレージを選択',
      'i.s4d_warn': 'PCのハードディスク（数百GB〜数TB）を選ぶと、そのディスクが消去されます。<b>必ず容量を確認してください。</b>',
      'i.s4e_h3': '内容を確認して<span class="ui">WRITE</span>を押します。',
      'i.s4e_desc': 'DeviceがRaspberry Pi Zero、Operating systemが<code class="file">.pi0.img</code>ファイルになっているか確認します。',
      'i.s4e_alt': 'Write imageの確認画面とWRITEボタン',
      'i.s4f_h3': '消去の確認画面で承認します。',
      'i.s4f_desc': 'カードのデータが消去されるという確認が表示されます。<span class="ui">I UNDERSTAND, ERASE AND WRITE</span>を押します。',
      'i.s4f_alt': 'データ消去の確認ダイアログ',
      'i.s4g_h3': '<b>Write complete!</b>と表示されたら完了です。',
      'i.s4g_desc': 'カードは自動で取り外し処理されます。リーダーをPCから抜き、microSDカードを取り出します。',
      'i.s4g_alt': 'Write complete画面',
      'i.s5_h2': '起動確認',
      'i.s5_lead': 'SeedSigner側面のスロットにmicroSDカードを差し込み、電源を接続します。SeedSignerのロゴに続いてメイン画面が表示されれば、インストールは完了です。',
      'i.s5_alt': 'SeedSigner側面のスロットにmicroSDカードを差し込んだ様子',
      'i.s5_video': 'SeedSignerの起動動画',
      'i.c_eyebrow': '注意事項',
      'i.c_h2': '急速充電器は使わないでください。',
      'i.c_p': '急速充電器はSeedSignerの故障の原因になることがあります。電源は<b>一般的な5V USB充電器またはPCのUSBポート</b>から供給してください。',

      /* verify.html */
      'v.title': 'SeedSignerイメージの検証 · JikKey',
      'v.desc': 'ダウンロードしたSeedSigner OSイメージが改ざんされていないか、GPG署名とSHA256ハッシュで確認する方法（Windows）。',
      'v.hero_eyebrow': 'イメージの検証 · 任意',
      'v.hero_h1': '<span class="nb">ダウンロードした</span><span class="nb">ファイルが本物か、</span><br /><span class="nb">自分で</span><span class="nb">確かめましょう。</span>',
      'v.hero_tagline': '<span class="nb">署名をひとつ、</span><span class="nb">ハッシュをひとつ。</span><span class="nb sub">信頼せず、検証を。</span>',
      'v.meta_os': 'Windows向け',
      'v.meta_link': 'macOS · Linux 公式ガイド',
      'v.ver_label': '検証するバージョン',
      'v.ver_help': '入力したバージョンに合わせて、下のファイル名とコマンドが変わります。スクリーンショットは0.8.6のものです。',
      'v.why_eyebrow': 'なぜ検証するのか',
      'v.why_h2': '確認するのは2つです。',
      'v.why1_idx': '署名',
      'v.why1_b': 'SeedSignerチームが作ったファイルか',
      'v.why1_s': 'GPG署名で、ハッシュリストの作成者を確認します。',
      'v.why2_idx': 'ハッシュ',
      'v.why2_b': 'ダウンロード中に変わっていないか',
      'v.why2_s': 'イメージのSHA256ハッシュが、リストと1文字も違わないか確認します。',
      'v.rail_p': '検証手順',
      'v.rail1': '<span>01</span>3つのファイルを入手',
      'v.rail2': '<span>02</span>Gpg4winのインストール',
      'v.rail3': '<span>03</span>署名の検証',
      'v.rail4': '<span>04</span>ハッシュの照合',
      'v.rail5': '<span>✓</span>完了',
      'v.s1_h2': '<span class="nb">3つのファイルを</span><span class="nb">同じフォルダに</span><span class="nb">ダウンロードします。</span>',
      'v.s1_lead': 'イメージファイルのほかに、ハッシュリストとその署名ファイルが必要です。',
      'v.s1_uinote': 'スクリーンショットは韓国語版Windowsのものです。手順はどの言語でも同じです。',
      'v.s1a_h3': 'SeedSignerのGitHubからダウンロードします。',
      'v.s1a_desc': ' の表からPi Zero 1.3用のイメージを、表の下の<b>Also download these 2 signature verification files</b>から2つのファイルをダウンロードします。',
      'v.s1a_alt': 'ダウンロード表と署名検証ファイル2つの場所',
      'v.dt_img': 'OSイメージ',
      'v.dt_hash': 'ハッシュリスト',
      'v.dt_sig': '署名',
      'v.s1b_h3': '3つのファイルを同じフォルダに置きます。',
      'v.s1b_desc': '例のように<code class="file">ダウンロード\\verify</code>フォルダにまとめておけば、以降のコマンドをそのまま使えます。',
      'v.s1b_alt': 'verifyフォルダにまとめた3つのファイル',
      'v.s2_h2': 'Gpg4winのインストール',
      'v.s2_lead': 'GPG（GNU Privacy Guard）は、デジタル署名を確認する無料のオープンソースツールです。そのWindows版がGpg4winです。',
      'v.s2a_h3': 'GnuPGのダウンロードページでGpg4winを探します。',
      'v.s2a_desc': ' を下にスクロールし、<b>GnuPG binary releases</b>の表にある<b>Gpg4win</b>を押します。',
      'v.s2a_alt': 'GnuPG binary releasesの表にあるGpg4winのリンク',
      'v.s2b_h3': '<span class="ui">Download</span>を押します。',
      'v.s2b_alt': 'Gpg4winのダウンロードボタン',
      'v.s2c_h3': 'ダウンロードしたインストーラーを実行します。',
      'v.s2c_desc': '既定のオプションのままインストールすれば大丈夫です。',
      'v.s2c_alt': 'Gpg4winのダウンロード画面',
      'v.s3_h2': '署名の検証',
      'v.s3_lead': 'PowerShellでSeedSignerの公開鍵を取得し、ハッシュリストの署名を確認します。',
      'v.s3a_h3': 'PowerShellを開きます。',
      'v.s3a_desc': 'スタートメニューで<b>PowerShell</b>を検索して起動します。',
      'v.s3a_alt': 'スタートメニューでPowerShellを検索',
      'v.s3b_h3': 'ファイルを置いたフォルダへ移動します。',
      'v.s3b_desc': '別のフォルダに保存した場合は、そのパスに置き換えてください。',
      'v.s3c_h3': 'SeedSignerの公開鍵を取得します。',
      'v.s3c_alt': '公開鍵の取得結果',
      'v.s3d_h3': '署名を確認します。',
      'v.s3d_alt': 'gpg verifyの結果に表示されたGood signatureとフィンガープリント',
      'v.s3e_h3': '結果で2つのことを確認します。',
      'v.dt_sigres': '署名の結果',
      'v.dt_fp': '鍵フィンガープリントの末尾16桁',
      'v.dd_fp': '<code>C7EF 7090 0726 0119</code> — Keybaseと一致すること',
      'v.s3e_desc': ' に表示されている鍵と、ターミナルの<b>Primary key fingerprint</b>の末尾を直接見比べてください。',
      'v.s3e_alt': 'KeybaseのSeedSigner鍵フィンガープリント',
      'v.s3e_note': '<b>WARNING: This key is not certified with a trusted signature!</b> と表示されるのは正常です。このPCでこの鍵を「信頼済み」に設定していないという意味で、Keybaseとフィンガープリントを照合することで確認の代わりになります。一方、<b>BAD signature</b>と表示された場合は、ファイルを削除してダウンロードし直してください。',
      'v.s4_h2': 'ハッシュの照合',
      'v.s4_lead': '署名で確認したハッシュリストと、ダウンロードしたイメージのハッシュが一致するか確認します。',
      'v.s4a_h3': 'イメージファイルのSHA256ハッシュを計算します。',
      'v.s4b_h3': 'ハッシュリストと見比べます。',
      'v.s4b_desc': `${V(SHA)}をメモ帳で開き、<code class="file">pi0.img</code>の行の値が、計算した値と<b>すべて</b>一致するか確認します。`,
      'v.s4b_alt': 'CertUtilの結果とsha256.txtのpi0.imgの行の比較',
      'v.done_h2': '検証が完了しました。',
      'v.done_p': '署名とハッシュがどちらも一致すれば、安心してインストールを進めてください。',
      'v.done_cta': 'インストールガイドに戻る',
    },
  };

  const SUPPORTED = ['ko', 'en', 'ja'];
  const STORE_KEY = 'jk-lang';
  const root = document.documentElement;
  const original = new WeakMap();
  let lang = SUPPORTED.includes(window.__jkLang) ? window.__jkLang : 'ko';

  const keep = (el) => {
    if (!original.has(el)) original.set(el, { html: el.innerHTML, attrs: {} });
    return original.get(el);
  };

  const loadJaFont = () => {
    if (document.getElementById('font-ja')) return;
    const link = document.createElement('link');
    link.id = 'font-ja';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
  };

  const apply = (next) => {
    lang = SUPPORTED.includes(next) ? next : 'ko';
    const dict = DICT[lang];
    root.lang = lang;
    if (lang === 'ja') loadJaFont();

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const saved = keep(el);
      const value = dict ? dict[el.dataset.i18n] : saved.html;
      el.innerHTML = value != null ? value : saved.html;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const saved = keep(el);
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        if (!attr || !key) return;
        if (!(attr in saved.attrs)) saved.attrs[attr] = el.getAttribute(attr);
        const value = dict ? dict[key] : saved.attrs[attr];
        el.setAttribute(attr, value != null ? value : saved.attrs[attr]);
      });
    });

    const select = document.getElementById('lang-select');
    if (select) select.value = lang;
    root.classList.remove('i18n-pending');
    document.dispatchEvent(new CustomEvent('jk:lang', { detail: { lang } }));
  };

  window.JKI18N = {
    get lang() { return lang; },
    t: (key) => (DICT[lang] ? DICT[lang][key] : undefined),
    set: (next) => {
      try { localStorage.setItem(STORE_KEY, next); } catch { /* storage unavailable */ }
      apply(next);
    },
    keys: () => ({ en: Object.keys(DICT.en), ja: Object.keys(DICT.ja) }),
  };

  const select = document.getElementById('lang-select');
  if (select) select.addEventListener('change', () => window.JKI18N.set(select.value));

  if (lang !== 'ko') apply(lang);
  else if (select) select.value = 'ko';
})();
