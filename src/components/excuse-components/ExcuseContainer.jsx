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
          {value === 'party' ? '🎉' : value === 'office' ? '💼' : value === 'developer' ? '💻' : '👪'}
        </div>
        <label htmlFor='excuse' className='excuseLabel'>
          <select
            onChange={(e) => setValue(e.target.value)}
            name='excuse'
            id='excuse'
            className='excuseSelect'
          >
            <option value='family'>Gatherings Excuse</option>
            <option value='office'>Office Excuse</option>
            <option value='party'>Party Excuse</option>
            <option value='developer'>Developer Excuse</option>
          </select>
        </label>

        <button className='excuseFetchButton' onClick={fetchData}>
          Generate Excuse
        </button>
        <div
          className='generatedExcuseCotainer'
          onClick={(e) => {
            // navigator.clipboard.writeText(e.target.innerText);
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
