import { FilePondOptions } from "filepond";
import { environment } from "src/environments/environment";

export const  FilepondOptionsConfig: FilePondOptions ={
    credits: false,
      allowMultiple: false,
      // Labels en français
      labelInvalidField: "Le champ contient des fichiers invalides",
      labelFileWaitingForSize: "Calcul de la taille...",
      labelFileSizeNotAvailable: "Taille non disponible",
      labelFileLoading: "Chargement...",
      labelFileLoadError: "Erreur lors du chargement",
      labelFileProcessing: "Téléversement...",
      labelFileProcessingComplete: "Téléversement terminé",
      labelFileProcessingAborted: "Téléversement annulé",
      labelFileProcessingError: "Erreur lors du téléversement",
      labelFileProcessingRevertError: "Erreur lors de l'annulation",
      labelFileRemoveError: "Erreur lors de la suppression",
      labelTapToCancel: "Cliquez pour annuler",
      labelTapToRetry: "Cliquez pour réessayer",
      labelTapToUndo: "Cliquez pour annuler",
      labelButtonRemoveItem: "Supprimer",
      labelButtonAbortItemLoad: "Annuler",
      labelButtonRetryItemLoad: "Réessayer",
      labelButtonAbortItemProcessing: "Annuler",
      labelButtonUndoItemProcessing: "Annuler",
      labelButtonRetryItemProcessing: "Réessayer",
      labelButtonProcessItem: "Téléverser",
      allowImageExifOrientation: true,
      allowImagePreview: true,
      acceptedFileTypes: [...environment.extensions_image, ...environment.extensions_files],
      imagePreviewMaxHeight: 150, // Taille de prévisualisation
      labelIdle: '',
};