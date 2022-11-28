import copyIcon from '../../assets/copyIcon.svg';

function ExcuseContainer({
  excuse,
  value,
  setValue,
  copied,
  setCopied,
  fetchData,
}) {
  return (
    <>
      <div className='excuseContainer'>
        <div className='excuseEmojiContainer'>
          {value === 'party'
            ? '🎉'
            : value === 'family'
            ? '👪'
            : value === 'developer'
            ? '💻'
            : value === 'college'
            ? '🎓'
            : value === 'funny'
            ? '🤡'
            : value === 'exaggerated'
            ? '🤯'
            : value === 'gamer'
            ? '🎮'
            : '💼'}
        </div>
        <label htmlFor='excuse' className='excuseLabel'>
          <select
            onChange={(e) => setValue(e.target.value)}
            name='excuse'
            id='excuse'
            className='excuseSelect'
          >
            <option value='office'>Office Excuses</option>
            <option value='family'>Gatherings Excuses</option>
            <option value='party'>Party Excuses</option>
            <option value='developer'>Developer Excuses</option>
            <option value='gamer'>Gamer Excuses</option>
            <option value='college'>College Excuses</option>
            <option value='funny'>Funny Excuses</option>
            <option value='exaggerated'>Exaggerated Excuses</option>
          </select>
        </label>

        <button className='excuseFetchButton' onClick={fetchData}>
          Generate Excuse
        </button>
        <div
          className='generatedExcuseCotainer'
          onClick={(e) => {
            navigator.clipboard.writeText(excuse);

            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 5000);
          }}
        >
          <p className='generatedExcuse'>{excuse}</p>
          {copied && <p className='excuseCopyPopUp'>Text Copied!</p>}
        </div>
        <button
          className='excuseCopyButton'
          onClick={() => {
            navigator.clipboard.writeText(excuse);

            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 5000);
          }}
        >
          <img src={copyIcon} />
        </button>
      </div>
    </>
  );
}

export default ExcuseContainer;
