import React, {useState} from 'react'

function CommentSection() {
    const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [submittedComments, setSubmittedComments] = useState([]);
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label><br />
        <input
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
    </div>
  )
}

export default CommentSection;