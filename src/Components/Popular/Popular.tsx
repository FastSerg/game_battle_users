import RepoGrid from './RepoGrid'
import SelectedLanguages from './SelectedLanguages'
import './Popular.scss'

type Props = {}

const Popular = (props: Props) => {
    return (
        <>
            <SelectedLanguages />
            <RepoGrid />
        </>
    )
}

export default Popular
