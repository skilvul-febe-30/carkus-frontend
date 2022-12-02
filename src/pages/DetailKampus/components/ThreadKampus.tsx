import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { createComment } from "../../../api/comments";
import { handleAuthError } from "../../../api/handleAuthError";
import { deleteThread } from "../../../api/threads";
import { getUserById } from "../../../api/user";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchCampus } from "../../../redux/reducers/campus";
import type { Thread } from "../../../types/Thread";
import type { User } from "../../../types/User";
import { formatTime } from "../../../utils/formatTime";
import KomentarThread from "./KomentarThread";

export default function ThreadKampus({ _id: threadId, content, createdAt, author: authorId, comments }: Thread) {
  const { campusId = "" } = useParams();
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.authState.userId);
  const [author, setAuthor] = useState<User | null>(null);

  const [commentContent, setCommentContent] = useState("");

  useEffect(() => {
    getUserById(authorId)
      .then((res) => {
        setAuthor(res.data);
      })
      .catch(() => {
        setAuthor({
          _id: authorId,
          username: "unknown",
        });
      });
  }, []);

  async function onSubmit() {
    setCommentContent("");
    try {
      await createComment(campusId, threadId, {
        content: commentContent,
      });
      dispatch(fetchCampus(campusId));
    } catch (err) {
      handleAuthError(err);
    }
  }

  async function handleDelete() {
    if (!confirm("Yakin mau hapus thread ini?")) return;
    try {
      await deleteThread(campusId, threadId);
      dispatch(fetchCampus(campusId));
    } catch (err) {
      handleAuthError(err);
    }
  }

  return (
    <div className="col">
      <div className="row my-2">
        <div className="col d-flex justify-content-between">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            style={{ height: "70px" }}
            className="p-2"
          />
          <p id="name" className="p-2">
            <span className="h4">{author?.username ?? authorId}</span>
            <span className="text-muted">
              <br />
              {formatTime(createdAt)}
            </span>
          </p>
          {authorId === userId ? (
            <a className="fa-solid fa-trash p-2 ms-auto" style={{ color: "red" }} onClick={handleDelete}></a>
          ) : (
            <p className="p-2 ms-auto"> </p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col ms-2">
          <p>{content}</p>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-12">
          <p className="text-muted ms-2">Komentar</p>
        </div>
        {comments.map((comment, index) => (
          <KomentarThread key={index} {...comment} />
        ))}
        <div className="col-12">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Tambah Komentar"
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
            />
            <button className="btn btn-primary" type="button" id="button-addon2" onClick={onSubmit}>
              Komentar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
