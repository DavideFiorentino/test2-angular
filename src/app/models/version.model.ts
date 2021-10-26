export interface IVersion {
    name: string;
    url: string
}

export interface IVersionGroupDetail {
    level_learned_at: number;
    move_learn_method:  { name: string, url: string };
    version_group: { name: string, url: string }
}