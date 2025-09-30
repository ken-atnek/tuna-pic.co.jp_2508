/* =======================================
 * ツナーズピクニック CONTACT
 * URL: src/components/ContainerContact.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-26
 * Last updated: 2025-07-26
 * ======================================= */
'use client';
import React, { useState, useRef } from 'react';
import Modal from '@/components/Modal';
import styles from '@/styles/ContainerContact.module.scss';
import Link from 'next/link';
const DetailForm = () => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false); // 確認画面フラグ
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダル制御

  const [reply, setReply] = useState('');

  const topRef = useRef<HTMLDivElement | null>(null);

  // **確認ボタンの処理**
  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!Name || !email || !phone || !message || !reply) {
      setStatus('必須項目を入力してください');
      return;
    }

    setIsConfirming(true); // 確認画面へ
    setStatus('');
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  // **修正ボタンの処理（入力画面に戻る）**
  const handleEdit = () => {
    setIsConfirming(false);
  };

  // **送信処理**
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', Name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);
    formData.append('reply', reply);

    try {
      const response = await fetch(
        'https://tuna-pic.co.jp/backend/contact.php',
        {
          method: 'POST',
          body: formData,
        }
      );

      const result = await response.json();
      // console.log('サーバーレスポンス:', result);

      if (result.success) {
        setStatus('');
        setIsModalOpen(true); // モーダルを開く
        setTimeout(() => setIsModalOpen(false), 3000); // 3秒後に自動閉じる
        setName('');
        setEmail('');
        setPhone('');
        setReply('');
        setMessage('');
        setIsConfirming(false); // 入力画面に戻す
      } else {
        setStatus(result.error || '送信に失敗しました。');
      }
    } catch (error) {
      console.error('エラー:', error);
      setStatus('エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={styles.containerContact} id="ContainerContact">
      <h2>
        con<i>tac</i>t
      </h2>
      <article>
        <div className={styles.itemDetail}>
          <form
            className={styles.blockForm}
            onSubmit={isConfirming ? handleSubmit : handleConfirm}
          >
            {isConfirming ? (
              // ✅ 確認画面
              <div className={styles.statusConfirm}>
                <p>入力内容を確認してください。</p>
                <dl>
                  <dt>お名前</dt>
                  <dd>
                    <div>{Name}</div>
                  </dd>
                </dl>
                <dl>
                  <dt>電話番号</dt>
                  <dd>
                    <div>{phone}</div>
                  </dd>
                </dl>
                <dl>
                  <dt>メールアドレス</dt>
                  <dd>
                    <div>{email}</div>
                  </dd>
                </dl>
                <div className={styles.boxMessage}>{message}</div>
                <div className={styles.box_btn}>
                  <button type="button" onClick={handleEdit}>
                    修正する
                  </button>
                  <button type="submit" disabled={loading}>
                    {loading ? '送信中…' : '送信'}
                  </button>
                </div>
              </div>
            ) : (
              // ✅ 入力画面
              <div className={styles.blockFormInner}>
                <dl>
                  <dt className={styles.formRequired}>お名前</dt>
                  <dd>
                    <input
                      type="text"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="お名前"
                    />
                  </dd>
                </dl>
                <dl>
                  <dt className={styles.formRequired}>電話番号</dt>
                  <dd>
                    <input
                      type="text"
                      inputMode="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="電話番号を入力してください"
                    />
                  </dd>
                </dl>
                <dl>
                  <dt className={styles.formRequired}>メールアドレス</dt>
                  <dd>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="メールアドレスを入力してください"
                    />
                  </dd>
                </dl>
                <dl>
                  <dt>折り返しご連絡方法</dt>
                  <dd className={styles.replyMethod}>
                    <select
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="電話">電話</option>
                      <option value="メール">メール</option>
                      <option value="その他">その他</option>
                    </select>
                  </dd>
                </dl>
                <dl>
                  <dt className={styles.formRequired}>お問い合わせ内容</dt>
                  <dd>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="お問い合わせ内容を入力してください"
                    />
                  </dd>
                </dl>
                <div className={styles.box_btn}>
                  <div className={styles.wrapRadio}>
                    <label>
                      <input type="checkbox" required />
                    </label>
                    <Link href="/">プライバシーポリシーに同意する</Link>
                  </div>
                  <button type="submit">確 認</button>
                </div>
              </div>
            )}
            <p>{status}</p>
          </form>
        </div>
      </article>
      {/* ✅ モーダル表示 */}
      {isModalOpen && (
        <Modal
          message="お問い合わせが送信されました。"
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default DetailForm;
