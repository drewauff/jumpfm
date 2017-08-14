import { plugins, savePlugins } from './files';

export interface PluginDesc {
    enabled: boolean
    js: string
    css?: string
}

export const loadPlugins = (): PluginDesc[] => {
    const defaultPlugins: { [name: string]: PluginDesc } = {
        'version': { enabled: true, js: './PluginVersion' },
        'clock': { enabled: true, js: './PluginClock' },
        'weather': { enabled: true, js: './PluginWeather' },
        'fileSystem': { enabled: true, js: './PluginFileSystem' },
        'keyNav': { enabled: true, js: './PluginKeyNav' },
        'fileOperations': { enabled: true, js: './PluginFileOperations' },
        'copy': { enabled: true, js: './PluginCopy' },
        'jump': { enabled: true, js: './PluginJump' },
        'history': { enabled: true, js: './PluginHistory' },
        'flatMode': { enabled: true, js: './PluginFlatMode' },
        'runCmd': { enabled: true, js: './PluginRunCmd' },
        // TODO long load time
        'zip': { enabled: true, js: './PluginZip' },
        'gitStatus': { enabled: true, js: './PluginGitStatus', css: './css/gitstatus.css' },
        'publicGist': { enabled: true, js: './PluginPublicGist' },
    }

    Object.keys(defaultPlugins).forEach(key => {
        if (plugins[key]) return
        plugins[key] = defaultPlugins[key]
    })

    savePlugins(plugins)
    return Object.values(plugins).filter(plugin => plugin.enabled)
}