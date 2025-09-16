import style from './index.module.scss'
import './index.scss'

import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import { StrictMode } from 'react'

const domNode = document.getElementById('root') as HTMLDivElement
const root = createRoot(domNode)
root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
