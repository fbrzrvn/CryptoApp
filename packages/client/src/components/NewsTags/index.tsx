import { tags } from 'constants/tags';
import React from 'react';
import { Tag, TagsWrapper } from './styles';

interface NewsTagsProps {
  category: string;
  setCategory: (category: string) => void;
}

const NewsTags: React.VFC<NewsTagsProps> = ({ category, setCategory }) => {
  return (
    <TagsWrapper>
      {tags.map((tag) => (
        <Tag
          key={tag}
          isActive={category === tag}
          onClick={() => setCategory(tag)}
        >
          {tag}
        </Tag>
      ))}
    </TagsWrapper>
  );
};

export default NewsTags;
