import { Base } from "./base";
import { Posts } from "./posts";
import { applyMixins } from "./utils";
import { Post, NewPost } from "./posts/types";

class TypeiCode extends Base { };
interface TypeiCode extends Posts { };

applyMixins(TypeiCode, [ Posts ]);

export default TypeiCode;
export { type Post, type NewPost }