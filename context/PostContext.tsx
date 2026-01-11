import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext<any>(null);

export function PostProvider({ children }: any) {
    const [posts, setPosts] = useState([
        {
            id: '1',
            user: {
                name: 'Người dùng ẩn danh 001',
                avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=1'
            },
            time: '20 giờ trước',
            content:
                'Có những ngày đến trường mà lòng nặng trĩu, không hẳn vì bài khó hay điểm kém, mà vì cảm giác mình luôn phải cố gắng để không bị bỏ lại phía sau. Nhìn bạn bè học tốt, được khen ngợi, đôi khi tự hỏi liệu mình có đang chậm hơn người khác quá không. Áp lực không chỉ đến từ sách vở, mà còn từ kỳ vọng của gia đình, của thầy cô, và cả từ chính bản thân. Nhiều lúc chỉ muốn được nói rằng mình mệt, nhưng lại sợ bị cho là yếu đuối. Ước gì việc học không chỉ là điểm số, mà còn là hành trình để hiểu và tin vào chính mình nhiều hơn.',
            imageUri:
                'https://i.pinimg.com/736x/7e/d6/2a/7ed62a80017812c5550ddeb9724401ed.jpg',
            liked: true,
            likeCount: 200,
            comments: 15,
            shares: 5
        },
        {
            id: '2',
            user: {
                name: 'Người dùng ẩn danh 002',
                avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=2'
            },
            time: '1 ngày trước',
            content:
                'Áp lực đại học không ồn ào, nhưng âm ỉ và kéo dài. Có những lúc chỉ muốn dừng lại một chút để thở...',
            imageUri:
                'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000',
            liked: false,
            likeCount: 120,
            comments: 8,
            shares: 2
        }
    ]);

    const toggleLike = (postId: string) => {
        setPosts(prev =>
            prev.map(p =>
                p.id === postId
                    ? {
                        ...p,
                        liked: !p.liked,
                        likeCount: p.liked
                            ? p.likeCount - 1
                            : p.likeCount + 1
                    }
                    : p
            )
        );
    };

    const getPostById = (id: string) => {
        return posts.find(p => p.id === id);
    };

    return (
        <PostContext.Provider
            value={{
                posts,
                toggleLike,
                getPostById
            }}
        >
            {children}
        </PostContext.Provider>
    );
}

export const usePost = () => useContext(PostContext);
