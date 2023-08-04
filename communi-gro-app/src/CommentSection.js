import React, {useState} from 'react'

function CommentSection() {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [submittedComments, setSubmittedComments] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = { email, comment };
        setSubmittedComments([...submittedComments, newComment]);
        setEmail('');
        setComment('');
      };

  return (
    <div className='comments'>
        <h2>Reviews and Comments</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label><br />
        <input
        name='email'
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        
        <label htmlFor='comment'>Comment</label><br />
        <textarea
          id='comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        /><br />
        
        <button type='submit'>Submit</button>
      </form>
      <h3>Submitted Comments</h3>
      <ul>
        {submittedComments.map((c, index) => (
          <li key={index}>
            <strong>{c.email}</strong>: {c.comment}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommentSection;