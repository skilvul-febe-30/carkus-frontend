import { useEffect, useState } from "react";
import { getUserById } from "../../../api/user";
import type { ThreadComment } from "../../../types/ThreadComment";
import type { User } from "../../../types/User";
import { formatTime } from "../../../utils/formatTime";

export default function KomentarThread({ content, createdAt, author: authorId }: ThreadComment) {
  const [author, setAuthor] = useState<User | null>(null);
  useEffect(() => {
    getUserById(authorId).then((res) => {
      setAuthor(res.data);
    });
  }, []);

  return (
    <div className="col-12 d-flex">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        style={{ height: "50px" }}
        className="rounded-circle"
      />
      <div className="row ms-1 mb-2 w-100">
        <div className="col bg-secondary bg-opacity-10 rounded-3">
          <div className="d-flex">
            <p className="my-auto">
              <strong>{author?.username ?? authorId}</strong>
            </p>
            <p className="ms-auto my-auto text-muted">{formatTime(createdAt)}</p>
          </div>
          <p className="my-auto mb-2">{content}</p>
        </div>
      </div>
    </div>
  );
}
