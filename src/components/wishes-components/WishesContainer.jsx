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
      <div className='wishesContainer'>
        <div className='wishesEmojiContainer'>
          {value === 'party' ? '🎉' : value === 'office' ? '💼' : '👪'}
        </div>
        <label htmlFor='excuse' className='wishesLabel'>
          <select
            onChange={(e) => setValue(e.target.value)}
            name='excuse'
            id='excuse'
            className='wishesSelect'
          >
            <option value='family'>Gatherings Wishes</option>
            <option value='office'>Office Wishes</option>
            <option value='party'>Party Wishes</option>
          </select>
        </label>

        <button className='wishesFetchButton' onClick={fetchData}>
          Generate Wishes
        </button>
        <div
          className='generatedWishesCotainer'
          onClick={(e) => {
            // navigator.clipboard.writeText(e.target.innerText);
            navigator.clipboard.writeText(excuse);

            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 5000);
          }}
        >
          <p className='generatedWishes'>{excuse}</p>
          {copied && <p className='wishesCopyPopUp'>Text Copied!</p>}
        </div>
        <button
          className='wishesCopyButton'
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
