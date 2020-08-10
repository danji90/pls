import conversation_1 from './images/study_group2.jpg';

export const sectionData = [
    {
        // English Conversation
        id: 'conversation',
        category: 'individual',
        title: 'English Conversation',
        content: {
            paragraphs: [
                'Nearly everybody has done English courses but most people have few opportunities to practise/use their English and so, over the years, their English gets "rusty". The best way to improve your English is to regularly use it in a conversational context, talking about things that interest you: travel, current affairs, culture, family and friends, hobbies, music and art, etc. My job is to encourage you to speak, to introduce new words and expressions suitable to your level, to point out mistakes and praise you when you use nice new vocabulary. Input for conversation will be from our own lives and experience, from books, from newspapers/magazines, and from the internet, using short video clips.'
            ]
        },
        format: {
            paragraphs: [
                'One-to-one or small group (max. 3 people) lessons   at my home (centre of Bolzano/Bozen) or at your home',
                'Group courses (4-8 people) at a place to be decided',
                'Online lessons for single people or small groups (max. 3 people) using either Skype or Zoom platforms',
            ]
        },
        extras: {
            paragraphs: ['You will need to do a Level Test to determine your English level. Please click here'],
            links: []
        },
        cost: {
            paragraphs: [
                '€38,00 per hour (of 60 minutes) for 1 person, €42,00 for 2 people, €45,00 for 3 or more people. Minimum 10 lessons',
                'Plus travelling expenses for lessons outside Bolzano/Bozen'
            ]
        },
        images: [
            conversation_1,
        ]
    },
    // English for the Office/Work
    {
        id: 'office_work',
        category: 'business',
        title: 'English for the Office/Work',
        content: {
            paragraphs: [
                'Many people need English for the office/for their work. After a level test we will find out together what your needs are and we will devise a programme. Perhaps you need to write emails more confidently, to speak to customers on the phone, to give presentations, to participate in meetings (perhaps via video-conference), or to engage in polite conversation at trade fairs/conferences, etc.',
                'We will use published materials, input from your particular job, articles and internet videos.'
            ]
        },
        format: {
            paragraphs: [
                'One-to-one or small group (max. 3 people) lessons   at my home (centre of Bolzano/Bozen) or at your home',
                'Online lessons for single people or small groups (max. 3 people) using either Skype or Zoom platforms',
            ]
        },
        extras: {
            paragraphs: [
                'You will need to do a Level Test to determine your English level. Please click here',
                'If you require a course at your company, please go to English Training in Companies'
            ],
            links: []
        },
        cost: {
            paragraphs: [
                '€40,00 per hour (of 60 minutes) for 1 person, €44,00 for 2 people, €47,00 for 3 people. Minimum 10 lessons',
                'Plus travelling expenses for lessons outside Bolzano/Bozen'
            ]
        }
    },
    // Exam preparation
    {
        id: 'exam_prep',
        category: 'individual',
        title: 'Exam preparation',
        content: {
            paragraphs: [
                'Many people need to get external certification to demonstrate their level of English. The most common exams are:'
            ],
            list: [
                '<strong>Cambridge exams</strong>: Preliminary (PET) at B1 level, First (FCE) at B2 level, Advanced (CAE) at C1 level and Proficiency at C2 level.  These exams are often required by universities before admission or before you can conclude your studies and graduate.  These exams can be taken in Bolzano/Bozen three times a year (usually April, June and December). As an examiner , I can help you prepare for them. You would focus more on the use of English, the reading and listening, which I would monitor to make sure you are constantly improving.  Together we would work on your compositions and on your speaking, paying particular attention to successful strategies for the oral exam.',
                '<strong>IELTS exam</strong>: This exam is increasingly required by universities all over the world before you can study there. It is an exam of academic English, so reading and listening texts are general academic in style, and the writing also consists of interpreting data in the form of graphs or charts. There is no pass mark, everybody gets a grade, for example 5.5 or 7.0. Your university will tell you what grade you need to get for admission. The exam can be taken in Bolzano/Bozen, in Trento, in Padova and many other places.',
                '<strong>UniBz B2 and C1 exams</strong>: These important exams at UniBz are done on a computer and require special skills to optimise your performance. As a UniBz examiner, I’m able to guide you through these exams and help you pass them. '
            ]
        },
        format: {
            paragraphs: [
                'One-to-one or small group (max. 3 people) lessons   at my home (centre of Bolzano/Bozen) or at your home',
                'Group courses (4-8 people) at a place to be decided',
                'Online lessons for single people or small groups (max. 3 people) using either Skype or Zoom platforms. This is particularly suitable for those living a long way from Bolzano/Bozen.'
            ]
        },
        extras: {
            paragraphs: [
                'You will need to do a Level Test to determine your English level. Please click here'
            ],
            links: []
        },
        cost: {
            paragraphs: [
                '€40,00 per hour (of 60 minutes) for 1 person, €44,00 for 2 people, €47,00 for 3 or more people. Minimum 10 lessons',
                'Plus travelling expenses for lessons outside Bolzano/Bozen'
            ]
        }
    },
    // English Training in Companies
    {
        id: 'companies',
        category: 'business',
        title: 'English Training in Companies',
        content: {
            paragraphs: [
                'Because of the growing importance of English as a global language, companies nowadays have to make sure that their staff can communicate effectively in English. This could be the person at reception dealing with business clients/suppliers, or the person in the purchasing or marketing department. People in sales need to communicate effectively at trade fairs. After doing a level test and a needs analysis, we would together establish a target and draw up a programme. '
            ]
        },
        format: {
            paragraphs: [
                'One-to-one or small group (max. 3 people) lessons   at my home (centre of Bolzano/Bozen) or at your home',
                'Group courses (4-8 people) at a place to be decided',
                'Online lessons for single people or small groups (max. 3 people) using either Skype or Zoom platforms. This is particularly suitable for those living a long way from Bolzano/Bozen.',
            ]
        },
        extras: {
            paragraphs: [
                'You will need to do a Level Test to determine your English level. Please click here',
                'If you want to improve your work English as a private person, go to the English for Office/Work page.'
            ],
            links: []
        },
        cost: {
            paragraphs: [
                '€44,00 per hour (of 60 minutes) for 1 person, €49,00 for 2 people, €54,00 for 3 or more people. Minimum 10 lessons',
                'Plus travelling expenses for lessons outside Bolzano/Bozen'
            ]
        }
    },
    // Workshops for English Teachers     
    {
        id: 'workshops_for_teachers',
        category: 'professional',
        title: 'Workshops for English Teachers',
        content: {
            paragraphs: [
                'nglish teachers in state schools often find it useful to have regular sessions to keep their English ´ticking over‘. The sessions could be focused on a particular topic, e.g. how to make listening activities more authentic, or how to prepare students for the Cambridge exams. Or they could be more general: a potpourri of advanced language work to keep teachers‘ English on their toes and up-to-date, some teaching ideas for use in class, new teaching developments e.g. how to do online teaching more effectively or how to use webinars for our professional development.'
            ]
        },
        format: {
            paragraphs: [
                'Either one or more 3 or 4-hour workshops  or a regular once-a month 2-hour session over the school year',
                'For groups of English teachers, to be held in a school.',
            ]
        },
        extras: {
            paragraphs: [],
            links: []
        },
        cost: {
            paragraphs: [
                '€60,00 per hour (of 60 minutes) for the group, plus travelling expenses for lessons outside Bolzano/Bozen.'
            ]
        }
    },
    // Translations/Proof-reading/Presentations
    {
        id: 'trans_proof_present',
        category: 'professional',
        title: 'Translations/Proof-reading/Presentations',
        content: {
            paragraphs: [
                'More and more business documents have to be written in English, students are increasingly writing their Master and PhD theses in English and need their texts proof-read, many people have to give presentations in English and need to practise this beforehand. In cases like these, it’s always best to go over what you have written with a native-speaker. I have several years‘ experience of translating documents into English (tourist brochures, historical guide-books, product manuals, filmscripts, etc.) and have helped many students with their dissertations/theses and various professional people with their presentations at international conferences.'
            ]
        },
        extras: {
            paragraphs: [
                'Send me details of what you want translated/proof-read and I will give you an estimate.  Here’s the contact form'
            ],
            links: []
        },
    },
    // English and Walking/Trekking    
    {
        id: 'walking_trekking',
        category: 'individual',
        title: 'English and Walking/Trekking',
        content: {
            paragraphs: [
                'Walking is an activity that lends itself very well to communicating with other walkers. So let’s walk and chat in English! I’m a keen walker myself and know the mountains of South Tyrol quite well and I’m constantly discovering new places. My suggestion is that you join me on my walks and we chat in English the whole day. I would discreetly correct your mistakes, suggest new ways of saying something and provide a lot of  colloquial vocabulary input. Walks would be easy-medium difficulty, involving 3-5 hours walking and 300-600 metres of difference in altitude. We would meet in the morning for a coffee, go by bus/train (using public transport as much as possible), chatting in English, then set out on our walk, have a picnic in a beautiful spot, walk down and return, perhaps stopping for an ice-cream or a beer. So this would be a full day chatting in English!',
                'Walks will be once a month, mainly on Thursdays, on the last week of every month, but occasionally on Saturdays.',
                'Please note that I’m NOT an official walking guide  (Wanderführer/guida escursionistica). I suggest walks and you are invited to join me at your own responsibility. My job is simply to provide the English input, and I may organise language games/quizzes during the day. Minimum: 4 people, maximum: 10 people. Participants are encouraged to suggest new future  walks!',
                'These English walking days are at self-cost but I ask for a modest €15,00 per person/day to cover my language services, very reasonable considering you are getting the services of a language teacher for practically the whole day!',
                'If you are interested in joining me, fill in and send  the contact form and I will include you in my mailing list for English Walking Days with my suggestions for the upcoming walks. A minimum English level of B1 is assumed.',
                'Over the years I have also organised many English Trekking Weeks all over Italy in much the same way as the English Walking Days above. We’ve been to the Monti Madonie in Sicily, to Elba, to the Costa Amalfitana, to Abruzzo, to the Cinque Terre, to the mountains above Lake Como, etc., generally staying in simple alberghi. Usually in spring/early summer. Again, this is a collective effort, we organise everything together at self-cost and I provide the linguistic input, for which I charge a very reasonable €100,00 per person for the week. If you’re interested, fill in the contact form and I will put you on my mailing list.'
            ]
        },
    },
    // English Consultant for Self-Study
    {
        id: 'self_study',
        category: 'individual',
        title: 'English Consultant for Self-Study',
        content: {
            paragraphs: [
                'For one reason or another, many people just don’t have the time to attend courses with me or at a language school, but they want to improve their English via self-study. Nowadays there’s a vast range of possibilities, especially using the internet and course ebooks. There’s so much on offer that it’s often difficult to know where to start. With my extensive teaching experience, I can give you lots of tips and suggestions for FREE! Just contact me and say something about yourself and what you need English for and I will be in touch.'
            ]
        },
        format: {
            paragraphs: [
                'If required, I can come to your home and show you a wealth of useful websites, YouTube videos, Ebooks,  on your computer.'
            ]
        },
        extras: {
            paragraphs: [],
            links: []
        },
        cost: {
            paragraphs: [
                'For this service I charge €40,00/hour (60 minutes) '
            ]
        }
    },
]

export default sectionData;