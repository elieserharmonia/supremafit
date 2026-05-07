"use client";

import { useState } from "react";
import { Bookmark, Heart, MessageCircle, MoreHorizontal, Play, Send, Share2, X } from "lucide-react";
import { generateBrandedShareImage } from "../lib/share";

type Post = {
  id: string;
  author: string;
  initials: string;
  time: string;
  category: string;
  caption: string;
  likes: number;
  comments: number;
};

const defaultComments = [
  { name: "Julia Bianchi", initials: "JB", text: "Inspiração demais! Boraaa 🔥", time: "1 h" },
  { name: "Coach Leo", initials: "CL", text: "Execução boa. Mantém esse controle na descida.", time: "35 min" }
];

export function FeedCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  function toggleLike() {
    setLiked((value) => !value);
    setLikes((value) => value + (liked ? -1 : 1));
  }

  return (
    <article className="card feed-card" id="feed">
      <div className="feed-head">
        <div className="avatar">{post.initials}</div>
        <div className="feed-meta">
          <strong>{post.author}</strong>
          <span>{post.time} · {post.category}</span>
        </div>
        <button className="action-button" aria-label="Mais opções"><MoreHorizontal size={18} /></button>
      </div>
      <div className="media-card">
        <div className="play-badge"><Play size={24} fill="white" /></div>
        <div className="media-label">
          <b>{post.category}</b>
          <small>SUPREMA FIT ACADEMIA</small>
        </div>
      </div>
      <div className="feed-body">
        <p className="caption">{post.caption}</p>
        <div className="post-actions">
          <div className="action-group">
            <button onClick={toggleLike} className={`action-button ${liked ? "active" : ""}`}><Heart size={19} fill={liked ? "currentColor" : "none"} />{likes}</button>
            <button onClick={() => setCommentsOpen(true)} className="action-button"><MessageCircle size={19} />{post.comments}</button>
            <button onClick={() => setShareOpen(true)} className="action-button"><Share2 size={19} /></button>
          </div>
          <button onClick={() => setSaved((v) => !v)} className={`action-button ${saved ? "active" : ""}`}><Bookmark size={19} fill={saved ? "currentColor" : "none"} /></button>
        </div>
      </div>
      {commentsOpen && <CommentDrawer post={post} onClose={() => setCommentsOpen(false)} />}
      {shareOpen && <ShareModal post={post} onClose={() => setShareOpen(false)} />}
    </article>
  );
}

function CommentDrawer({ post, onClose }: { post: Post; onClose: () => void }) {
  const [comments, setComments] = useState(defaultComments);
  const [value, setValue] = useState("");

  function addComment() {
    if (!value.trim()) return;
    setComments([{ name: "João Pedro", initials: "JP", text: value.trim(), time: "agora" }, ...comments]);
    setValue("");
  }

  return (
    <div className="drawer-backdrop" role="dialog" aria-modal="true">
      <div className="drawer-panel">
        <div className="modal-top">
          <h3>Comentários</h3>
          <button className="icon-button" onClick={onClose}><X size={18} /></button>
        </div>
        <p className="muted">Post de {post.author}</p>
        <div>
          {comments.map((comment, index) => (
            <div className="comment" key={`${comment.name}-${index}`}>
              <div className="avatar">{comment.initials}</div>
              <div>
                <strong>{comment.name}</strong> <small>{comment.time}</small>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="input-row" style={{ marginTop: 12 }}>
          <input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Adicionar comentário..." />
          <button className="primary-btn" onClick={addComment}><Send size={17} /></button>
        </div>
      </div>
    </div>
  );
}

function ShareModal({ post, onClose }: { post: Post; onClose: () => void }) {
  const [status, setStatus] = useState("");

  async function shareExternal(channel?: string) {
    setStatus("Gerando imagem com marca SUPREMA FIT ACADEMIA...");
    const dataUrl = await generateBrandedShareImage(post);
    const blob = await (await fetch(dataUrl)).blob();
    const file = new File([blob], "suprema-fit-post.png", { type: "image/png" });
    const text = `${post.caption} — via SUPREMA FIT ACADEMIA`;

    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: "SUPREMA FIT ACADEMIA", text, files: [file] });
      setStatus("Imagem compartilhada com marca SUPREMA FIT ACADEMIA.");
      return;
    }

    if (channel === "WhatsApp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    }
    if (channel === "Facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`, "_blank");
    }
    if (channel === "Instagram") {
      setStatus("Instagram não permite envio direto pela web. Baixe a imagem marcada e publique no Instagram.");
      return;
    }

    downloadDataUrl(dataUrl);
    setStatus("Imagem gerada com marca SUPREMA FIT ACADEMIA.");
  }

  async function copyLink() {
    await navigator.clipboard.writeText(location.href);
    setStatus("Link copiado com sucesso.");
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal-panel">
        <div className="modal-top">
          <h3>Compartilhar</h3>
          <button className="icon-button" onClick={onClose}><X size={18} /></button>
        </div>
        <div className="share-grid">
          <button className="share-option orange-fill" onClick={() => setStatus("Post compartilhado com sucesso dentro do app.")}>Compartilhar no app</button>
          <button className="share-option" onClick={() => shareExternal("WhatsApp")}>WhatsApp</button>
          <button className="share-option" onClick={() => shareExternal("Instagram")}>Instagram</button>
          <button className="share-option" onClick={() => shareExternal("Facebook")}>Facebook</button>
          <button className="share-option" onClick={copyLink}>Copiar link</button>
          <button className="share-option" onClick={() => shareExternal()}>Baixar imagem</button>
        </div>
        <p className="muted" style={{ marginTop: 14 }}>{status || "Ao compartilhar fora do app, a imagem recebe a marca SUPREMA FIT ACADEMIA no canto inferior direito."}</p>
      </div>
    </div>
  );
}

function downloadDataUrl(dataUrl: string) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = "suprema-fit-post.png";
  link.click();
}
