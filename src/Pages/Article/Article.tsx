import React from 'react'
import './Article.css'
import { Shares } from '../../components/ui/Shares/Shares'
import { Comments } from '../../components/ui/Comments/Comments'
export const Article: React.FC = () => {
    return (
        <main className=" article pages pages--mobile px-8 xl:px-32">
            <section className='pt-8'>
                <img className='article__header w-full  mb-4' src="https://volna.volkovdesign.com/img/posts/article.jpg" alt="" />
                <div className='flex justify-between mb-4'>
                    <a href="#" className='shares__btn shares__btn--tw py-1 capitalize'>
                        Documentary
                    </a>
                    <span className='article__time flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"></path></svg>
                        09.03.2021, 16:37
                    </span>
                </div>
            </section>
            <section className='release-border pb-8 mb-8'>
                <h1 className='article__h1 mb-6'>Winners Bracket Final Interview - Most Emotional Esports Interview</h1>
                <p className='text-gary mb-4'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <p className='text-gary mb-4'>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>

                <h1 className='article__h2 mb-6'>
                    Keep Reading (H2)
                </h1>
                <p className='text-gary mb-4'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
                <h1 className='article__h3 mb-6'>
                    Some title(H3)
                </h1>
                <p className='text-gary mb-4'>
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
                <p className='text-gary mb-4'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                </p>
                <h1 className='article__h4 mb-6'>
                    Some title(H4)
                </h1>
                <p className='text-gary mb-4'>
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
                <blockquote className='article__blockquote relative mb-4 ps-6'>
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </blockquote>
                <p className='text-gary mb-4'>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h1 className='article__h5 mb-6'>
                    Some title(H5)
                </h1>
                <h1 className='article__h6 mb-6'>
                    Some title(H6)
                </h1>
                <p className='text-gary mb-4'>
                    It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
                <ul className="list-style__ul  mb-6">
                    <li className="list-style__ul__li">Theme Forest</li>
                    <li className="list-style__ul__li">Graphic River</li>
                    <li className="list-style__ul__li">Audio Jungle</li>
                    <li className="list-style__ul__li">3D Ocean</li>
                    <li className="list-style__ul__li">Code Canayon</li>
                </ul>
                <p className='text-gary'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. <a href="#" className='about-link'>Link</a> the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </p>
                <Shares classBox='ps-0 pb-0'/>
            </section>
            <Comments
            name='article'
            items={
                [
                    {
                        date:'30.08.2021, 17:53',
                        name:'John Doe',
                        dislike:12,
                        like:31,
                        srcImg:'https://volna.volkovdesign.com/img/avatar.svg',
                        text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                        replay:-1,
                    },
                    {
                        date:'24.08.2021, 16:41',
                        name:'John Doe',
                        dislike:0,
                        like:11,
                        srcImg:'https://volna.volkovdesign.com/img/avatar.svg',
                        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                        replay:0,
                    },
                    {
                        date:'11.08.2021, 11:11',
                        name:'John Doe',
                        dislike:8,
                        like:10,
                        srcImg:'https://volna.volkovdesign.com/img/avatar.svg',
                        text:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        replay:0,
                    },
                    {
                        date:'07.08.2021, 14:33',
                        name:'John Doe',
                        dislike:4,
                        like:8,
                        srcImg:'https://volna.volkovdesign.com/img/avatar.svg',
                        text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                        replay:-1,
                    },

                ]
            }
            />
        </main>
    )
}

