export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind,string>;

export interface AlertProps{
    /**
     *
     *
     * @type {('info' | 'positive' | 'negative' | 'warning')}
     * @memberof AlertProps
     * @default info
     */
    kind?:'info' | 'positive' | 'negative' | 'warning'
}