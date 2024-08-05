const questions = [
    {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.  Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.',
    },
    {
        id: 2,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.  Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.',
    },
    {
        id: 3,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.  Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.',
    },
    {
        id: 4,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.  Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.',
    },

]
import "./style.css"
import { useState, useEffect } from "react";

export function FAQ() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearchChange = e => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const results = questions.filter(item =>
            item.question.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div className='container md:w-8/12'>
            <section className='faq'>
                {searchResults.map(item => <Question question={item.question} answer={item.answer} />)}
            </section>
        </div>
    )
}


const Question = props => {
    const [isActive, setActive] = useState(false);
    const handleClick = (id) => {
        setActive(!isActive)
    }
    return (
        <div className="question-wrapper">
            <div className='question' id={props.id}>
                <h3>{props.question}</h3>
                <button onClick={() => handleClick(props.id)}>

                    {!isActive ? <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.683594" width="29" height="29" rx="14.5" stroke="#B6B8BA" />
                        <path d="M15.0005 12.1836V18.1836" stroke="#B6B8BA" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M18.0005 15.1836L12.0005 15.1836" stroke="#B6B8BA" stroke-width="1.5" stroke-linecap="round" />
                    </svg> : <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.683594" width="29" height="29" rx="14.5" stroke="url(#paint0_linear_656_45370)" />
                        <path d="M18.9995 15.1836H11.9995" stroke="#232B31" stroke-width="1.5" stroke-linecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_656_45370" x1="-4.78281" y1="17.8503" x2="34.9987" y2="8.74715" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F6DEC6" />
                                <stop offset="0.47" stop-color="#E872D4" />
                                <stop offset="0.656667" stop-color="#C190D9" />
                                <stop offset="0.881578" stop-color="#A2DCFE" />
                            </linearGradient>
                        </defs>
                    </svg>
                    }


                </button>
            </div>
            <div className={isActive ? 'answer active' : 'answer'}>{props.answer}</div>
        </div>
    )
}
