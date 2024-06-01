import React from 'react'
import { HeadPages } from '../../components/ui/HeadPages/HeadPages'
import './Privacy.css'
import { Supporters } from '../../components/ui/Supporters/Supporters'
export const Privacy: React.FC = () => {
    return (
        <main className='artist pages pages--mobile'>
            <HeadPages title='Privacy policy' Items={[{ text: 'home', href: "/" }, { text: 'Privacy policy' }]} />
            <section className='px-8'>
                <p className='text-gary pb-6'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                </p>
                <p className='text-gary pb-6'>
                    Many desktop publishing packages and <a href="#" className='about-link'>web page</a> editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                </p>
                <p className='text-gary pb-6'>
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
            </section>
            <section className='list-privacy px-8'>
                <ol >
                    <li className='list-privacy__title'>
                        Determination of personal information of users
                        <ol >
                            <li>If you are going to use a passage of Lorem Ipsum:
                                <ol>
                                    <li>
                                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                    </li>
                                    <li>
                                        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                            </li>
                            <li>
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </li>
                        </ol>
                    </li>
                    <li className='list-privacy__title'>
                        Reasons for collecting and processing user personal information
                        <ol>
                            <li>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                            </li>
                            <li>
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet:
                                <ol>
                                    <li>
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged;
                                    </li>
                                    <li>
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages;

                                    </li>
                                    <li>
                                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like);

                                    </li>
                                    <li>
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text;
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ol>
                <p className='text-gary pt-6'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </section>
            <Supporters/>
        </main>
    )
}
