import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface EpisodeInstace extends Model {
    id: number;
    episodio: number;
    temp: number;
    name: string;
    img: string;
    download: string;
    youtube: string;
    slides: string;
    lifekids: string;
    showAt: string;
}

export const EpisodesTp = sequelize.define<EpisodeInstace>(
    "Episode",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        episodio: {
            type: DataTypes.INTEGER,
        },
        temp: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        img: {
            type: DataTypes.STRING,
        },
        download: {
            type: DataTypes.STRING,
        },
        slides: {
            type: DataTypes.STRING,
        },
        youtube: {
            type: DataTypes.STRING,
        },
        lifekids: {
            type: DataTypes.STRING,
        },
        showAt: {
            type: DataTypes.STRING,
            defaultValue: "#",
        },
    },
    {
        tableName: "tpEpisodes",
        timestamps: false,
    }
);
