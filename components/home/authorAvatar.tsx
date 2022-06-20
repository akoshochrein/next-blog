import { Avatar, Tooltip } from "@mui/material";
import { Author } from "../../shared/models";
import Image from "next/image";

export const AuthorAvatar = ({
    author,
    size = 36,
}: {
    author: Author;
    size?: number;
}) => (
    <Tooltip
        title={`Published by ${author.firstName} ${author.lastName}`}
        placement="bottom"
    >
        <Avatar sx={{ width: size, height: size }}>
            <Image
                src={author.avatar.url}
                width={size}
                height={size}
                alt={`Picture of ${author.firstName} ${author.lastName}`}
            />
        </Avatar>
    </Tooltip>
);
